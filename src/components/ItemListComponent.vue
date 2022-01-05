<template>
  <div class='item-container'>
    <div class='items'>
      <div v-for="item in items" :key="item" class='item'>
        <p> {{ item.description }} </p>
        <pre> {{ item.code }} </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { code : 'Test Code;\n# hello world!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n\n\n\n!', description : '1'},
        { code : 'Test Code;\n# hello world', description : '2' },
        { code : 'Test Code;\n# hello world', description : '3' },
        { code : 'Test Code;\n# hello world', description : '4' },
        { code : 'Test Code;\n# hello world', description : '5' },
        { code : 'Test Code;\n# hello world', description : '6' },
        { code : 'Test Code;\n# hello world', description : '7' },
      ]
    }
  },
  mounted() {
  },
  computed: {
    
  },
  props: {
  
  },
};
</script>

<style scoped>
.item-container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.items::before{
  content:"";
  display: block;
  width:23%;
  margin: 10px;
  order:1;
}

.items::after{
  content:"";
  display: block;
  width:23%;
  margin: 10px;
}

.item {
  margin: 10px;
  width: 23%;
}

pre {
  /* width: 100%; */
  height: 100px;
  margin: 1em 0;
  padding: 1em;
  border-radius: 5px;
  background: #25292f;
  color: #fff;
  /* 縦スクロール可能 */
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  text-align: left;
}
</style>