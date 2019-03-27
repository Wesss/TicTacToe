import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import Game from '../../src/app/Game.js';
import GameBoard from '../../src/app/GameBoard.js';

test("renders", () => {
  render(<Game />);
});

test("begins with the start button", () => {
  var component = shallow(<Game/>);
  expect(component.find('.start-button').length).toBe(1);
});

test("moves to the game board when clicking start", () => {
  var component = shallow(<Game/>);
  component.find('.start-button').simulate('click');
  expect(component.find(GameBoard).length).toBe(1);
});
