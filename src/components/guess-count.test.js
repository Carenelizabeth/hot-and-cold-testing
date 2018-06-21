import React from 'react';
import {shallow} from 'enzyme'
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Should display the guess count', () => {
        const guessCount = 5;
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.contains(guessCount)).toEqual(true);
    });
})