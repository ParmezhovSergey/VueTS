import { getUsers } from "./api.ts";

export interface IUser {
  id: number;
  name: string;
  age: number;
  city: string;
}

export interface initialState {
  users: Array<IUser>;
}

export const usersModule = {
  state: () => ({
    users: [],
  }),

  getters: {
    users(state: initialState) {
      return state.users;
    },
  },

  mutations: {
    setUsers(state: initialState, users: IUser[]) {
      state.users = users;
    },

    changeUsers(state: initialState, newUser: IUser) {
      const newArray = state.users.map((obj) => {
        if (obj.id === newUser.id) {
          return newUser;
        }
        return obj;
      });
      state.users = newArray;
    },
  },

  actions: {
    async fetchUsers(context: { commit: (arg0: string, arg1: any) => void }) {
      const settings = await getUsers();
      context.commit("setUsers", settings);
      console.log("post", settings);
    },
  },

  namespaced: true,
};
