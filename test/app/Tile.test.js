import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import { stub } from 'sinon';
import Tile from '../../src/app/Tile.js';
import Game from '../../src/app/Game.js';

test("renders", () => {
  render(<Tile
    contents={Tile.TILE_STATE.EMPTY}
    onClick={stub()}
    gameState={Game.GAME_STATE.UNINITIALLIZED}
  />);
});

test("displays its contents if it is not empty", () => {
  var component = shallow(<Tile
    contents={Tile.TILE_STATE.X}
    onClick={stub()}
    gameState={Game.GAME_STATE.O_MOVE}
  />);
  expect(component.find(".Tile").text()).toBe(Tile.TILE_STATE.X);
});

test("displays its potential contents on hover if empty", () => {
  var component = shallow(<Tile
    contents={Tile.TILE_STATE.EMPTY}
    onClick={stub()}
    gameState={Game.GAME_STATE.X_MOVE}
  />);
  expect(component.find(".Tile").text()).toBe(Tile.TILE_STATE.X);
  expect(component.find(".Tile-container").props().className).toBe("Tile-container Tile-X-hover");
});
