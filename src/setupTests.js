// eslint-disable-next-line
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
//import toJson from 'enzyme-to-json'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

const globalEnzyme = {
    shallow,
    render,
    mount
}

//global.toJson = toJson

// Fail tests on any warning
console.error = message => {
    throw new Error(message)
};

export default globalEnzyme;
