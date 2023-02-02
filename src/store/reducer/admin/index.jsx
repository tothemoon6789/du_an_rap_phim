const initAdmin = {
    accessToken:'',
    adminInfo: {},
    adminInfoSearch: {},
}

const adminReducer = (state=initAdmin,action) => {
    switch (action.type) {
        case 'ADMIN_LOGIN':
            
            return {
                ...state,
                accessToken: action.payload.accessToken,
                adminInfo: action.payload,
            }
        case 'SEARCH_USER':
            console.log(action.payload);
            const cloneData = {...state.adminInfo}
            console.log(cloneData);
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}
export default adminReducer