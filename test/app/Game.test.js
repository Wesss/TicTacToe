import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import { stub } from 'sinon';
import Game from '../../src/app/Game.js';
import GameBoard from '../../src/app/GameBoard.js';

test("renders", () => {
  render(<Game/>);
});

test("starts in the uninitiallized state", () => {
  var component = shallow(<Game/>);
  expect(component.find(GameBoard).props().gameState).toBe(Game.GAME_STATE.UNINITIALLIZED);
});

test("changes state according to the GameBoard", () => {
  var component = shallow(<Game/>);
  component.find(GameBoard).props().setGameState(Game.GAME_STATE.X_MOVE)
  expect(component.find(GameBoard).props().gameState).toBe(Game.GAME_STATE.X_MOVE);
});
