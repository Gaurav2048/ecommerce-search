export const initialValue = {
    data: [{
        id: 3,
        name: 'stuff'
    }],
    carts: [],
}

const reducer = (state, action) => {
    const { type, payload } = action;
   
    if (type === "PRODUCT_DATA") {
        return {
            ...state,
            data: NormalizeResponse(payload)
        }
    } else if (type === "ADD_TO_CART") {
        return {
            ...state,
            carts: [...state.carts, payload]
        }
    } else if (type === "REMOVE_FROM_CART") {
        const filterCart = state.carts.filter(item => item !== payload);
        return {
            ...state,
            carts: filterCart,
        }
    }

    return state;
}

export default reducer;

const NormalizeResponse = (arr) => {
    if (!Array.isArray(arr))  return;

    const normalizeResponse = {};
    const map = {};
    const ids = [];

    arr.forEach(element => {
        const key = element.id.toString();
        map[key] = element;
        ids.push(key);
    })

    normalizeResponse.map = map;
    normalizeResponse.ids = ids;

    return normalizeResponse;    
}
