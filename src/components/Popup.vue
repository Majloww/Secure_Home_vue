<template>
  <div v-if="visible" class="overlay">
    <div class="popup">
      <p>{{ message }}</p>
      <button @click="closePopup" class="btn btn-dark">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      default: "Item added to cart!",
    },
  },
  methods: {
    closePopup() {
      this.$emit("update:visible", false); //Emit an event to close the popup
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
}

.popup button {
  margin-top: 20px;
}

/*
diff popup
.popup {
  position: absolute;
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transform: translateX(-50%);
}
*/
</style>