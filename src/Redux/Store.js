import { RootReducer } from "./RootReducer";
import { createStore } from "redux";

import React from 'react'

export const Store = createStore(RootReducer,{},   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

