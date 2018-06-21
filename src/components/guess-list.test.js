import React from 'react'
import {shallow} from 'enzyme'

import GuessList from './guess-list'

describe('<GuessList />', () => {
    const seedGuess = []
    beforeAll(() => {
        for(let i=0; i<5; i++){
            seedGuess.push(i*10)
        }
    })


    it('should render without crashing', () => {
        shallow(<GuessList guesses={seedGuess} />);
    });

    it('should render the list of guesses', () => {
        const wrapper = shallow(<seedGuess guesses={seedGuess}/>);
        const guess = wrapper.prop('guesses');
        expect(guess.length).toEqual(seedGuess.length);
        expect(guess[0]).toEqual(seedGuess[0]);
    })
})