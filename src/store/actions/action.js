export function setCardData(cart){
    return{
        type : "SET_CART_DATA",
        payload : cart,
    }
}

export function addItem(item){
    return{
        type : "ADD_ITEM",
        payload : item,
    }
}

export function decreaseQuantityInList(id){
    return{
        type : "DECREASE_QUANTITY",
        payload : id,
    }
}

export function increaseQuantityInList(id){
    return{
        type : "INCREASE_QUANTITY",
        payload : id,
    }
}

export function removeItemFromCart(id){
    return{
        type : "REMOVE_ITEMS_FROM_CART",
        payload : id,
    }
}

export function clearCartItems() {
    console.log("cart cleared")
    return {
        type : "CLEAR_CART"
    }
}