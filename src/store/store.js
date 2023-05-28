import { configureStore } from '@reduxjs/toolkit'
import themeSlice from '@/store/slices/themeSlice'

export default configureStore({
    reducer: {
        theme: themeSlice
    }
})