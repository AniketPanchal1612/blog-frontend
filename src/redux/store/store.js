import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/users/userSlices'
import categoriesReducer from '../slices/Category/categorySlice'
import post from '../slices/posts/postSlice'
import comment from '../slices/comments/commentSlices'
const store = configureStore({
    reducer:{
       users:userReducer,
       category:categoriesReducer,
       post,
       comment


    }
})

export default store