import React from 'react';
import ReactDOM from 'react-dom'
import {shallow, mount} from 'enzyme'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import AuralStatus from './aural-status'

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    })
})