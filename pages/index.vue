<template>
  <div>
    <section class="flex flex-col w-full max-w-[600px] min-h-[800px] px-4 pt-3 pb-5 lg:p-6 m-auto rounded-lg bg-white">
      <div class="flex justify-between items-end pb-2 border-b border-gray-200">
        <h2 class="text-2xl text-gray-700 font-bold">My Tasks</h2>
        <p v-if="ifPaginatedTasks" class="m-0 text-gray-700">Page {{currentPage}} of {{pages}}</p>
      </div>
      <ul class="flex-auto mt-2">
        <task v-for="task in paginatedTasks" :key="task.id" :task="task" @remove="removeTask"/>
      </ul>
      <div class="flex align-center justify-between mt-4">
        <div class="inline-flex">
          <button v-if="ifPaginatedTasks" v-for="page in pages" :key="page" @click="paginateTasks(page)" :class="{'rounded-l': page === 1, 'rounded-r': page === pages, 'bg-gray-200':page === currentPage }" class="bg-gray-100 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4">
            {{ page }}
          </button>
        </div>
        <button type="button" @click="openModal" class="bg-gray-100 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded">
          + New Task
        </button>
      </div>
    </section>
    <ui-modal @close="closeModal" @add="addTask" v-show="modalShow"/>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data: () => ({
    currentPage: 1,
    tasksPerPage: 12,
    modalShow: false
  }),
  computed: {
    tasks() {
      return this.$store.getters["todos/getTasks"]
    },
    pages() {
      return Math.ceil(this.tasks.length / this.tasksPerPage)
    },
    paginatedTasks() {
      let from = (this.currentPage - 1) * this.tasksPerPage
      let to = from + this.tasksPerPage
      return this.tasks.slice(from, to)
    },
    ifPaginatedTasks() {
      return this.pages > 1
    }
  },
  methods: {
    openModal() {
      this.modalShow = true
    },
    closeModal() {
      this.modalShow = false
    },
    addTask(data) {
      this.closeModal()
      this.currentPage = 1
      this.$store.dispatch('todos/addTask', data)
    },
    removeTask(task) {
      this.$store.dispatch('todos/removeTask', task)
    },
    paginateTasks(page) {
      this.currentPage = page
    }
  }
}
</script>
