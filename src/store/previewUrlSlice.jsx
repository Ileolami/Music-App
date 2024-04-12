import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    previewUrls: [],
};

const previewUrlSlice = createSlice({
    name: 'previewUrl',
    initialState,
    reducers: {
        setPreviewUrls: (state = initialState, action) => {
            console.log(action);
            return{
                ...state,
                previewUrls : action.payload.preview_url
            }
        },
    }
});

export const { setPreviewUrls } = previewUrlSlice.actions;

export default previewUrlSlice.reducer;