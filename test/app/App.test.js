import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import App from '../../src/app/App.js';

test("renders", () => {
  var component = render(<App />);
});
