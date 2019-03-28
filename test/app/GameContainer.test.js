import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import GameContainer from '../../src/app/GameContainer.js';
import Game from '../../src/app/Game.js';

test("renders", () => {
  render(<GameContainer/>);
});

test("begins with the start menu", () => {
  var component = shallow(<GameContainer/>);
  expect(component.find('.Button').length).toBe(1);
});

test("moves to the game board when clicking start", () => {
  var component = shallow(<GameContainer/>);
  component.find('.Button').simulate('click');
  expect(component.find(Game).length).toBe(1);
});

test("moves to the start menu when clicking quit", () => {
  var component = shallow(<GameContainer/>);
  component.find('.Button').simulate('click');
  component.find(Game).props().quit();
  expect(component.find('.Button').length).toBe(1);
});
