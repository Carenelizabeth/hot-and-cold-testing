import React from 'react'
import {shallow, mount} from 'enzyme'

import Game from './game'

describe('<Game />', () =>{
    it('Should render without crashing', () => {
        shallow(<Game />);
    });

    it('Rejects a non-numerical entry', () => {
        const feedback = 'Please enter a valid number';
        const guess = 'blue';
        const wrapper = shallow(<Game />);
        wrapper.instance().makeGuess(guess);
        wrapper.update();
        expect(wrapper.state('feedback')).toEqual(feedback)
    })
})