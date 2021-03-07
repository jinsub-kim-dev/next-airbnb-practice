import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomState } from "../types/reduxState";
import { RoomType } from "../types/room";

//* 초기 상태
const initialState: RoomState = {
  rooms: [],
  detail: null,
};

const room = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRooms(state, action: PayloadAction<RoomType[]>) {
      state.rooms = action.payload;
      return state;
    },
  },
});

export const roomActions = { ...room.actions };

export default room;
