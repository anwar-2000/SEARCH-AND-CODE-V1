import { configureStore } from "@reduxjs/toolkit";
import FetchingSlice from "./fetch-Slice";



const Store = configureStore({
    reducer :  {fetchSearch : FetchingSlice.reducer}
})

export default Store ;