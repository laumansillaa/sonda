const initialState = {
    allProds:[],
    prod: [],
    detail: [],
    curso: [],
    admin: []
}

function reducer (state= initialState, action) {
    switch (action.type) {
        case "GET_PROD":
            return {
                ...state,
                allProds: action.payload,
                prod: action.payload
            }
        case "GET_DETAIL":
            return {
                ...state,
                detail: action.payload
            }
        case "UPDATE_PROD":
            return {
                ...state,
            }
        case "GET_CURSO":
            return {
                ...state,
                curso: action.payload
            }
        case "CREATE_CURSO": 
            return {
                ...state,
                curso: action.payload
            }
        case 'GET_CURSO_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        case 'UPDATE_CURSO':
            return {
                ...state,
            }
        case 'FILTER_PROD': 
            const prods = state.allProds
            if (action.payload === "todo") {
                return {
                    ...state,
                    prod: prods
                }
            } else {
                const stateFilter = prods.filter((e) => e.prov === action.payload)
                return {
                    ...state,
                    prod: stateFilter
                }
            }
        case 'GET_ADMIN' : 
            return {
                ...state,
                admin: action.payload
            }
        default:
            return state
    }
}

export default reducer;