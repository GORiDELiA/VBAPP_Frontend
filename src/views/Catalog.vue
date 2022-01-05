<template>
  <h2>Hello Catalog Page</h2>
  <itemList-component></itemList-component>
</template>

<script>
import ItemListComponent from "@/components/ItemListComponent.vue";

export default {
  components: { ItemListComponent },
  name: "App",
  data() {
    return {
      
    };
  },
};
</script>

<style>

</style>