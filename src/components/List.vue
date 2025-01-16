<template>
  <ul class="list-group">
    <li v-for="(item, index) in items" :key="index" class="list-group-item">
      <slot name="item-content" :item="item" :index="index">
        {{ item }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ReusableList",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-group {
  padding: 0;
  margin: 0;
}

.list-group-item {
  font-size: large;
  font-weight: bold;
  border: 1px solid black;
  padding: 10px;
}
</style>
