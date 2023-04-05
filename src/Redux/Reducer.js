import * as actiontypes from "./Action-types";

import React from 'react'

const initialstate={
    count:0
}

export const Reducer = (state = initialstate , action) => {
  switch(action.type){
    case actiontypes.Increment:
        return{
            ...state,
            count:state.count+1
        }

    case actiontypes.Decrement:
        return{
            ...state,
            count:state.count-1
        }
    
    default:
        return state;
  }
}

 