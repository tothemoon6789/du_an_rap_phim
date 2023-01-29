const initFilm = {
filmClicked:{},
}
const filmReducer = (state=initFilm,action) => {
    switch (action.type) {
        case 'FILM_CLICKED':
            return {...state,
            filmClicked: action.payload
            }
    
        default:
            return {...state}
    }
}
export default filmReducer