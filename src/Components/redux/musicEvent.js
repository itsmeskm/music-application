import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playlist:[],
}

export const musicEvent = createSlice({
  name: 'music',
  initialState,
  reducers: {
    addPlaylist: (state,action) => {
      console.log(state,"state",action,"action");
      state.playlist = [...state.playlist,action.payload];
    },
    addSong: (state,action) => {
      const playistId = action.payload.id;
      console.log(state,"state",action,"action");
      console.log(state.playlist,"stateMu",action,"action");
      state.playlist = state.playlist.map((album) => {
        console.log(album.song,"album")
        if(album.id === playistId) {
          album.song =  [...album.song,action.payload.url];
        }
        return album;
      })
      console.log(action.payload,"actionResult");
    },
    deletePlaylist: (state,action) => {
      const playListId = action.payload;
      state.playlist = state.playlist.filter((list) => list.id !== playListId)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPlaylist,addSong,deletePlaylist } = musicEvent.actions

export default musicEvent.reducer