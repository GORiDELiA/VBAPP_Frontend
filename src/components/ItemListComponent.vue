<template>
  <div class="container">

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
  
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  clear: both;
}

.item_box {
  float: left;
  margin: 10px;
  object-fit: contain;
}

.item_box img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  display: block;
}
</style>