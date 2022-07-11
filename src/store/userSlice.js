import { createSlice } from '@reduxjs/toolkit';

const mockUser = {
  name: 'upworkTest',
  password: '2022',
};

const initialState = {
  userName: null,
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    signIn: (state, action) => {
      const { name, password } = action.payload;

      if (mockUser.name !== name || mockUser.password !== password) {
        throw new Error('Wrong password or username, please try again');
      }

      state.userName = name;
      state.isLogged = true;
    },

    signOut: (state) => {
      state.userName = null;
      state.isLogged = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
