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
