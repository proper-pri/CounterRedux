import { Reducer } from "./Reducer";
import { combineReducers } from "redux";


import React from 'react'

export const RootReducer = combineReducers({
  ourState:Reducer
}) 

