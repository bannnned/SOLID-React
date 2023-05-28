import { createSlice } from '@reduxjs/toolkit'
import { themesObjects } from '@/constants/theme'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: themesObjects.light
    },
    reducers: {
        toggleTheme: state => {
            state.currentTheme = state.currentTheme.name === 'Light' ? themesObjects.dark : themesObjects.light
        },
        setTheme: (state, payload) => {
            const targetTheme = payload.payload
        }
    }
})

export const { toggleTheme, setTheme } = themeSlice.actions

export default themeSlice.reducer