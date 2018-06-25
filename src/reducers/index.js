import * as actions from '../actions'

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

export const hotColdReducer = (state=initialState, action) =>{
    if(action.type === actions.GIVE_FEEDBACK){
        return Object.assign({}, state, {
            feedback: action.feedback
        });
    }
    else if(action.type === actions.UPDATE_AURAL_STATUS){
        return Object.assign({}, state, {
            feedback: action.feedback
        })
    }
    else if(action.type === actions.SET_CORRECT_ANSWER){
        return Object.assign({}, state, {
            feedback: action.feedback
        })
    }else if(action.type === actions.ADD_GUESS){
        return Object.assign({}, state, {
            guesses: [...state.guesses, action.guess]
        })
    }

    return state;
}