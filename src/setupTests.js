// const Enzyme = require('enzyme');
// const EnzymeAdapter = require('enzyme-adapter-react-16');

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Setup enzyme's react adapter
configure({ adapter: new Adapter() });