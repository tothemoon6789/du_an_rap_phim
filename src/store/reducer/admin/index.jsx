const initAdmin = {
    accessToken:'',
    adminInfo: {}
}

const adminReducer = (state=initAdmin,action) => {
    switch (action.type) {
        case 'ADMIN_LOGIN':
            
            return {
                ...state,
                accessToken: action.payload.accessToken,
                adminInfo: action.payload,
            }
    
        default:
            return {
                ...state
            }
    }
}
export default adminReducer