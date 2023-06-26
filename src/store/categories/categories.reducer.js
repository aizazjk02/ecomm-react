const initialState = {
    categoriesMap : {}
}

export const categoriesActionTypes = {
    set_categoriesMap : "set_categoriesMap",
}

export const categoriesReducer = (state = initialState, action) => {
    const { type, payload } = action
    
    switch (type) {
        case categoriesActionTypes.set_categoriesMap : return {...state, categoriesMap: payload}
        default : return state
    }
}