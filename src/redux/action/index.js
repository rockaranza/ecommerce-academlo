//Agregar elementos al carrito
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product 
    }
}
//Eliminar elementos del carrito
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}