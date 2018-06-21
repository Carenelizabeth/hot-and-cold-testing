import React from 'react'
import {shallow} from 'enzyme'

import Feedback from './feedback'

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('renders the feedback', () => {
        const feedback = 'Make your guess!'
        const wrapper = shallow(<Feedback feedback={feedback}/>);
        expect(wrapper.contains(feedback)).toEqual(true);
    });

})