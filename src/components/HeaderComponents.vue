<template>
  <div class="container">
    <h1 class="title">VBApp</h1>
    <ul class="menu">
      <li class="menu-item"><router-link to="/">     Home      </router-link></li>
      <li class="menu-item"><router-link to="/about">   About    </router-link></li>
      <li class="menu-item"><router-link to="/catalog"> Catalog  </router-link></li>
      <!-- <li class="menu-item"><router-link to="/singin">  Sing in  </router-link></li>
      <li class="menu-item"><router-link to="/singup">  Sing up  </router-link></li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: {
    
  },
};
</script>

<style scoped>

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-bottom: solid 1px rgba(0,0,0,.1);
}

.title {
  margin-left: 40px;
}
.menu {
  display: flex;
  list-style: none;
}
.menu-item {
  margin-right: 25px;
}
.menu a {
  text-decoration: none;
}

</style>