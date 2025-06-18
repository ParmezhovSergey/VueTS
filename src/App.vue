<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <nav class="head">
      <RouterLink class="headerLink" to="/">Главная</RouterLink>
      <RouterLink class="headerLink" to="/list">Список сотрудников</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.head {
  background-color: rgb(19, 123, 251);
  height: 70px;
  display: flex;
  align-items: center;
}
.headerLink {
  color: white;
  text-decoration: none;
  font-size: 20px;
  margin-left: 20px;
  border: 1px solid whitesmoke;
  border-radius: 15px;
  padding: 5px;
}
.headerLink:hover {
  background-color: green;
}
</style>
