import list from '../actions/api/products.json'
import {getArrFromStorage, setToLocalStorage} from '../services/localStorageServices'

import {
    FETCH_CARS_SUCCESS
} from '../store/actionTypes'

let newProductList = [...list.products].map(p => {
    return {
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image,
        description: p.description
    }
})
console.log(list.products)

const initialProducts = () => {
    const dataFromStorage = getArrFromStorage();
    if (dataFromStorage && dataFromStorage.length) {
        return dataFromStorage;
    }
    setToLocalStorage(newProductList)
    return [...newProductList]
}
const initialState = {
    products: initialProducts()
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_CARS_SUCCESS: 
        return {
            ...state,
            products: payload,
        };
        default:
            return state
    }
}

export default reducer