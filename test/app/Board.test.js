import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import { stub } from 'sinon';
import Game from '../../src/app/Game.js';
import Board from '../../src/app/Board.js';
import Tile from '../../src/app/Tile.js';

test("renders", () => {
  render(<Board gameState={Game.GAME_STATE.UNINITIALLIZED} setGameState={stub()}/>);
});

test("starts with an empty 3x3 board", () => {
  var component = shallow(<Board gameState={Game.GAME_STATE.UNINITIALLIZED} setGameState={stub()}/>);
  expect(component.find(Tile).find("[contents=\"" + Tile.TILE_STATE.EMPTY + "\"]").length).toBe(9);
});

test("clicking a tile places the current player's shape there and advances the game", () => {
  var setGameStateStub = stub();
  var component = shallow(<Board gameState={Game.GAME_STATE.X_MOVE} setGameState={setGameStateStub}/>);
  component.find(Tile).at(0).simulate('click');
  expect(component.find(Tile).at(0).props().contents).toBe(Tile.TILE_STATE.X);
  expect(setGameStateStub.calledWith(Game.GAME_STATE.O_MOVE)).toBe(true);
});

test("clicking an empty tile fills it with the current player's marker", () => {
  var newTileState = Board.getTileStateChange(Tile.TILE_STATE.EMPTY, Game.GAME_STATE.X_MOVE);
  expect(newTileState).toBe(Tile.TILE_STATE.X);
});

test("clicking a filled in tile does nothing", () => {
  var newTileState = Board.getTileStateChange(Tile.TILE_STATE.O, Game.GAME_STATE.X_MOVE);
  expect(newTileState).toBe(Tile.TILE_STATE.O);
});

test("clicking a tile after the game  is over does nothing", () => {
  var newTileState = Board.getTileStateChange(Tile.TILE_STATE.O, Game.GAME_STATE.TIE);
  expect(newTileState).toBe(Tile.TILE_STATE.O);
});

test("an empty board means its X's turn", () => {
  var gameState = Board.getGameState([
    [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY],
    [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY],
    [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY]
  ]);
  expect(gameState).toBe(Game.GAME_STATE.X_MOVE);
});

test("having one more X and O means its O's turn", () => {
  var gameState = Board.getGameState([
    [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY],
    [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.X, Tile.TILE_STATE.EMPTY],
    [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY]
  ]);
  expect(gameState).toBe(Game.GAME_STATE.O_MOVE);
});

test("having equal X's and O's means its X's turn", () => {
  var gameState = Board.getGameState([
    [Tile.TILE_STATE.O, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY],
    [Tile.TILE_STATE.O, Tile.TILE_STATE.X, Tile.TILE_STATE.X],
    [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY]
  ]);
  expect(gameState).toBe(Game.GAME_STATE.X_MOVE);
});

test("having three X's vertically adjacent means X wins", () => {
  /*
   * note: this renders flipped across the x=y line as it appears written in code,
   * as we define the first array dereference to be the x position and the second
   * to be the y position
   */
  var gameState = Board.getGameState([
    [Tile.TILE_STATE.O, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY],
    [Tile.TILE_STATE.X, Tile.TILE_STATE.X, Tile.TILE_STATE.X],
    [Tile.TILE_STATE.O, Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.EMPTY]
  ]);
  expect(gameState).toBe(Game.GAME_STATE.X_WIN);
});

test("having three O's horizontally adjacent means O wins", () => {
  var gameState = Board.getGameState([
    [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.O, Tile.TILE_STATE.X],
    [Tile.TILE_STATE.X, Tile.TILE_STATE.O, Tile.TILE_STATE.EMPTY],
    [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.O, Tile.TILE_STATE.X]
  ]);
  expect(gameState).toBe(Game.GAME_STATE.O_WIN);
});

test("having three X's on the diagonal means X wins", () => {
  var gameState = Board.getGameState([
    [Tile.TILE_STATE.X, Tile.TILE_STATE.O, Tile.TILE_STATE.EMPTY],
    [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.X, Tile.TILE_STATE.EMPTY],
    [Tile.TILE_STATE.EMPTY, Tile.TILE_STATE.O, Tile.TILE_STATE.X]
  ]);
  expect(gameState).toBe(Game.GAME_STATE.X_WIN);
});

test("having every space filled without three identical pieces in a row gives a tie", () => {
  var gameState = Board.getGameState([
    [Tile.TILE_STATE.X, Tile.TILE_STATE.X, Tile.TILE_STATE.O],
    [Tile.TILE_STATE.O, Tile.TILE_STATE.X, Tile.TILE_STATE.X],
    [Tile.TILE_STATE.X, Tile.TILE_STATE.O, Tile.TILE_STATE.O]
  ]);
  expect(gameState).toBe(Game.GAME_STATE.TIE);
});
