import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import { stub } from 'sinon';
import Menu from '../../src/app/Menu.js';
import Game from '../../src/app/Game.js';

test("renders", () => {
  render(<Menu gameState={Game.GAME_STATE.UNINITIALLIZED} quit={stub()}/>);
});

test("calls the quit callback when quit is clicked", () => {
  var quitStub = stub();
  var component = shallow(<Menu gameState={Game.GAME_STATE.X_MOVE} quit={quitStub}/>);
  component.find(".Button").simulate('click');
  expect(quitStub.called).toBe(true);
});
