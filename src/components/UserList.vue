<template>
  <div class="header">
    <div class="user">Имя</div>
    <div class="user">Город</div>
    <div class="user">Возраст</div>
  </div>

  <div>
    <user-item v-for="user in users" :user:any="user" :key="user.id" />
  </div>
</template>

<script lang="ts">
import UserItem from "./UserItem.vue";
export default {
  components: {
    UserItem,
  },
  props: {
    users: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.header {
  padding: 15px;
  border: 2px solid rgb(71, 55, 4);
  margin: 15px 15px 0 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  color: white;
  background-color: rgb(71, 55, 4);
}
.user {
  width: 200px;
  display: flex;
  justify-content: center;
}
</style>
