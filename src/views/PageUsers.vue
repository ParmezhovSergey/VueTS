<template>
  <div class="list">
    <div class="title">Список сотрудников</div>
    <user-list :users="users" />
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions, mapMutations } from "vuex";
import UserList from "./../components/UserList.vue";

export default {
  components: {
    UserList,
  },

  mounted() {
    this.fetchUsers();
  },

  computed: {
    ...mapGetters({
      users: "usersModule/users",
    }),
  },

  methods: {
    ...mapActions({
      fetchUsers: "usersModule/fetchUsers",
    }),
  },
};
</script>

<style scoped>
.list {
  background-color: bisque;
  height: calc(100vh - 70px);
}
.title {
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
