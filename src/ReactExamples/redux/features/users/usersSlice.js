import { createSlice } from "@reduxjs/toolkit";
import { data as userData } from "./data";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: userData.users,
  },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;

export const getUsers = (state) => state.users.data;

export default usersSlice.reducer;
