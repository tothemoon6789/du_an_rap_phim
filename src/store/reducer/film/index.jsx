const initFilm = {
    filmClicked: {},
    listFilm: [],
    searchKey: '',
    listSearchFilm: [],
    booking: {},
}
const filmReducer = (state = initFilm, action) => {
    switch (action.type) {
        case 'FILM_CLICKED':
            return {
                ...state,
                filmClicked: action.payload
            }
        case 'ADD_LIST_FILM':
            return {
                ...state,
                listFilm: action.payload,
                listSearchFilm: action.payload,
            }
        case 'SEARCH_FILM':
            const allFilm = [...state.listFilm];
            const filmFilter = allFilm.filter((film) => {
                return film.tenPhim.toLowerCase().search(action.payload.toLowerCase()) !== -1
            })
            return {
                ...state,
                listSearchFilm: filmFilter,
            }
        case 'BOOKING':
            return {
                ...state,
                booking: action.payload,
            }
        default:
            return { ...state }
    }
}
export default filmReducer