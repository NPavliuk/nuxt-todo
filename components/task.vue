<template>
  <li class="group/task flex align-center justify-between px-3 py-3 rounded-lg cursor-pointer">
    <ui-ceheckbox class="mr-4" :checked="task.checked" :id="task.id" @change="handleChange"/>
    <p class="flex-auto text-gray-700" :class="{'line-through': task.checked}">{{ task.title }}</p>
    <ui-trash-button class="ml-2" @trash="handleTrash"/>
  </li>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    task: Object
  },
  methods: {
    handleChange() {
      const task = _.cloneDeep(this.task)
      this.$store.dispatch('todos/changeTaskStatus', task)
    },
    handleTrash() {
      this.$emit('remove', this.task)
    }
  }
}
</script>
