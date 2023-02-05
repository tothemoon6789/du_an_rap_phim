const initAdmin = {
    accessToken: '',
    adminInfo: {},
    adminInfoSearch: {},
}

const adminReducer = (state = initAdmin, action) => {
    switch (action.type) {
        case 'ADMIN_LOGIN':

            return {
                ...state,
                accessToken: action.payload.accessToken,
                adminInfo: action.payload,
            }
        case 'SEARCH_USER':
            const cloneData = { ...state.adminInfo }
            return {
                ...state,
            }
        case 'LOG_OUT':
            console.log('inside log out');
            window.alert('Đăng xuất thành công!')
            return {
                ...state,
                accessToken: '',
            }
        default:
            return {
                ...state
            }
    }
}
export default adminReducer