import { ADD_ITEM, CHECKOUT, CLEAR, DECREASE, INCREASE, REMOVE_ITEM } from "./actionTypes";

 export const addItem =(item)=>({
    type:ADD_ITEM,
    payload:item
 })
 export const removeItem =(item)=>({
    type:REMOVE_ITEM,
    payload:item
 })
 export const increase =(item)=>({
    type:INCREASE,
    payload:item
 })
 export const decrease =(item)=>({
    type:DECREASE,
    payload:item
 })
 export const checkout = ()=>({
    type:CHECKOUT,
 })
 export const clear =()=>({
    type:CLEAR,
 })