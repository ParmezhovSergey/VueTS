import { createStore } from "vuex";
import { usersModule } from "./usersModule.ts";



export default createStore({
  modules: {
    usersModule: usersModule
  }
});
