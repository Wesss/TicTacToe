import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import TicTacToe from '../../src/app/TicTacToe.js';

test("renders", () => {
  var component = render(<TicTacToe />);
});
