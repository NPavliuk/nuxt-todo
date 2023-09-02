<template>
  <label class="checkbox" :for="generateID">
    <input type="checkbox" :id="generateID" :checked="checked" @change="$emit('change')">
    <span></span>
  </label>
</template>

<script>
export default {
  props: {
    id: String,
    checked: Boolean
  },
  computed: {
    generateID() {
      return `task-${this.id}`
    }
  }
}
</script>

<style scoped>
.checkbox {
  cursor: pointer;

  input {
    display: none;

    &:checked + span {
      &::before {
        display: block;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #CDCECE;
    background-color: #FFFFFF;

    &::before {
      content: '✔';
      font-size: 30px;
      margin-bottom: 10px;
      margin-left: 6px;
      display: none;
      color: #374151;
    }
  }
}
</style>
