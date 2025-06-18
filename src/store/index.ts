import { createStore } from "vuex";
import { usersModule } from "./UsersModule";



export default createStore({
  modules: {
    usersModule: usersModule
  }
});
