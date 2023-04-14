let initialState = [];

const DefaultReducer = (state = initialState,action) => {
    switch(action.type){
        
        case "ADD_ITEM" :
                return [action.payload];
        case "REMOVE_ITEMS_FROM_CART" :
            const filteredList = state.filter((elem) => {return elem.id != action.payload});
            console.log(filteredList);
            return filteredList;

        case "CLEAR_CART" :
            return initialState;
        default :
         return state
    }
}

export default DefaultReducer;