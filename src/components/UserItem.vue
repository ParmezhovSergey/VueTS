<template>
  <div @click="openUser(user)" class="users">
    <div class="user">{{ user.name }}</div>
    <div class="user">{{ user.city }}</div>
    <div class="user">{{ user.age }}</div>
  </div>

  <div v-if="isOpen === true" class="modal-container">
    <div class="modal">
      <div class="header">Редактирование</div>
      <div class="name">
        Имя
        <input
          type="text"
          placeholder="Имя"
          v-model="newUser.name"
          style="margin-left: 30px"
        />
      </div>
      <div class="city">
        Город
        <input
          type="text"
          placeholder="Город"
          v-model="newUser.city"
          style="margin-left: 19px"
        />
      </div>
      <div class="age">
        Возраст
        <input
          type="text"
          placeholder="Возраст"
          v-model="newUser.age"
          style="margin-left: 4px"
        />
      </div>
      <div class="btn">
        <button class="btnBack" @click="closeUser()">Назад</button>
        <button class="btnSave" @click="saveBtn()">Сохранить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      newUser: {
        id: null,
        name: "",
        city: "",
        age: null,
      },
    };
  },
  props: {
    user: {
      type: Object,
    },
  },
  created() {
    this.newUser.id = this.user.id;
    this.newUser.name = this.user.name;
    this.newUser.city = this.user.city;
    this.newUser.age = this.user.age;
  },

  methods: {
    openUser(user) {
      this.isOpen = true;
    },
    closeUser() {
      this.isOpen = false;
    },
    saveBtn() {
      this.$store.commit("usersModule/changeUsers", this.newUser);
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.users {
  padding: 15px;
  border: 2px solid green;
  margin: 15px 15px 0 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
}
.users:hover {
  background-color: green;
}
.user {
  width: 200px;
  display: flex;
  justify-content: center;
}
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
.name {
  margin-top: 10px;
}
.city {
  margin-top: 10px;
}
.age {
  margin-top: 10px;
}
.btn {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.btnBack {
  margin-right: 10px;
  background-color: orange;
  border: orange;
  border-radius: 5px;
}
.btnSave {
  background-color: green;
  border: green;
  border-radius: 5px;
}
.header {
  display: flex;
  justify-content: center;
  color: red;
}
</style>
