import * as actiontypes from "./Action-types";

export const IncreaseVal=()=>{
    return{
        type:actiontypes.Increment
    }
}

export const DecreaseVal=()=>{
    return{
        type:actiontypes.Decrement
    }
}