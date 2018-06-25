export const SET_CORRECT_ANSWER = 'SET_CORRECT_ANSWER';
export const setCorrectAnswer = answer => ({
    type: SET_CORRECT_ANSWER,
    answer
});

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
    type: ADD_GUESS,
    guess
})

export const GIVE_FEEDBACK = 'GIVE_FEEDBACK';
export const giveFeedback = feedback => ({
    type: GIVE_FEEDBACK,
    feedback
})

export const UPDATE_AURAL_STATUS = 'UPDATE_AURAL_STATUS';
export const updateAuralStatus = status => ({
    type: UPDATE_AURAL_STATUS,
    status
})