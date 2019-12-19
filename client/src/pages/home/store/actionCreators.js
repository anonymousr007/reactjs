import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM,INIT} from "./constants";
import axios from "axios";

export const getInputChangeAction = (value)=>{
    return{
        type: CHANGE_INPUT_VALUE,
        value: value
    }
}

export const addItemAction = ()=>{
    return{
        type: ADD_TODO_ITEM
    }
}

export const delItemAction = (index)=>{
    return{
        type: DELETE_TODO_ITEM,
        index: index
    }
}

export const init = (data)=>{
    return{
        type: INIT,
        data: data
    }
}

export const getTodoList = ()=>{
    return(dispatch)=>{
        axios.get('test.json').then((res)=>{
            dispatch(init(res.data))
        })
    }
}
