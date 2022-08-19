import { FETCH_PRODUCTS_START,FETCH_PRODUCTS_SUCC,FETCH_PRODUCTS_FAIELD } from './actionTypes'
import axios from 'axios'


export function getAllProduct (dispatch) {
    dispatch(fetchProductStart())
    axios.get()
    .then(
        response=>{
        dispatch(fetchProductSucc(response.data))
    })
    .catch(error=>{
        dispatch(fetchProductFaield(error))
    })

} 


export const fetchProductStart=()=>({
    type:FETCH_PRODUCTS_START
})
export const fetchProductSucc=(data)=>({
    type:FETCH_PRODUCTS_SUCC,
    payload:data
})
export const fetchProductFaield=(error)=>({
    type:FETCH_PRODUCTS_FAIELD,
    payload:error
})