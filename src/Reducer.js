const Reducer = (state, action) => {
    const { type, payload  } = action;
    if (type === "PRODUCT_DATA") {
        return {
            ...state, 
            data: NormalizeResponse(payload)
        }
    } else if (type === "ADD_TO_CART") {
        return {
            ... state,
            cart: [ ... state.cart, payload ]
        }
    } else if (type === 'REMOVE_FROM_CART') {
        const filterCart = state.cart.filter(item => item !== payload);
        return {
            ... state,
            cart: filterCart,
        }
    }
    return state;
}

export default Reducer;

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
