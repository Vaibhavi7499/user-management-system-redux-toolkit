import { createSlice } from "@reduxjs/toolkit";

interface userData {
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
}

const userSlice = createSlice({
  name: "user",
  initialState: [] as userData[],

  reducers: {
    addUser: (state, action) => {
      state.push(action?.payload);
    },

    deleteUser: (state, action) => {
      return state.filter((e) => {
        return e?.id !== action?.payload;
      });
    },

    updateUser: (state, action) => {
      return state.map((e) => {
        if (e?.id === action.payload.id) {
          return {
            ...e,
            name: action.payload.name,
            email: action.payload.email,
            phoneNumber: action.payload.phoneNumber,
          };
        } else {
          return e;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
