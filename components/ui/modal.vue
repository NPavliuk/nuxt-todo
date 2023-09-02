<template>
  <section class="fixed top-0 left-0 right-0 bottom-0 z-[50] h-full w-full p-4 bg-gray-600 bg-opacity-50">
    <div class="w-full max-w-[500px] mt-[100px] mr-auto ml-auto p-3 bg-white rounded-lg">
      <div class="flex items-center justify-between">
        <h2 class="text-xl text-gray-700 font-bold">New Task</h2>
        <button type="button" @click="close"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>

      <p class="text-base text-gray-500">Add a new task to be completed</p>
      <input type="text" v-model="taskField" @keydown.enter="add"
             class="block w-full p-2.5 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-gray-500 outline-none" placeholder="Enter something..">

      <div class="flex items-center justify-between gap-4 mt-3">
        <button type="button" @click="close" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md w-full">Cancel</button>
        <button type="button" @click="add" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">Add</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    taskField: ''
  }),
  methods: {
    add() {
      if (this.taskField !== '') {
        this.$emit('add', this.taskField)
        this.clearField()
      }
    },
    close() {
      this.$emit('close')
      this.clearField()
    },
    clearField() {
      this.taskField = ''
    }
  }
}
</script>
