import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import { stub } from 'sinon';
import Game from '../../src/app/Game.js';
import Board from '../../src/app/Board.js';

test("renders", () => {
  render(<Game quit={stub()}/>);
});

test("starts in the uninitiallized state", () => {
  var component = shallow(<Game quit={stub()}/>);
  expect(component.find(Board).props().gameState).toBe(Game.GAME_STATE.UNINITIALLIZED);
});

test("changes state according to the Board", () => {
  var component = shallow(<Game quit={stub()}/>);
  component.find(Board).props().setGameState(Game.GAME_STATE.X_MOVE);
  expect(component.find(Board).props().gameState).toBe(Game.GAME_STATE.X_MOVE);
});
