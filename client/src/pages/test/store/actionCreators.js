import {INIT,CHANGE_INPUT_VALUE} from "./constants";
import axios from "axios";

export const init = (data)=>{
    return{
        type: INIT,
        data: data
    }
}

export const doSearch = (zip,predominant,year)=>{
    return (dispatch)=>{
        axios.post("http://localhost:8000/api/search",{
            predominant: predominant,
            zip: zip,
            year: year
        }).then(function (response) {
            dispatch(init(response.data.schools))
        }).catch(function (error) {
            console.log(error);
        });
    }
}

export const getInputChangeAction = (id,value)=>{
    return{
        type: CHANGE_INPUT_VALUE,
        id: id,
        value: value
    }
}


export const getTodoList = ()=>{
    return(dispatch)=>{
        axios.post("http://localhost:8000/api/search",{
            predominant: "2,3",
            zip: "52556",
            year: "2017"
        }).then(function (response) {
            dispatch(init(response.data.schools))
        }).catch(function (error) {
            console.log(error);
        });
    }
}
