<template>
  <div>
    <h2>Hello Catalog Page</h2>
    <div>
      <itemList-component></itemList-component>
    </div>
  </div>
</template>

<script>
import ItemListComponent from "@/components/ItemListComponent.vue";

export default {
  components: { ItemListComponent },
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
</style>