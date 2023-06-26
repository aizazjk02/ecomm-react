import { categoriesActionTypes } from "./categories.reducer"
export const setCategoriesMap = categoriesMap => {
    return {type: categoriesActionTypes.set_categoriesMap, payload: categoriesMap}
}