export const state = () => ({
  tasks: [
    {id: '1', title: "Buy groceries for the week.", checked: false},
    {id: '2', title: "Call mom to catch up.", checked: false},
    {id: '3', title: "Finish work presentation.", checked: false},
    {id: '4', title: "Go for a morning run.", checked: false},
    {id: '5', title: "Pay utility bills online.", checked: false},
    {id: '6', title: "Schedule dentist appointment.", checked: false},
    {id: '7', title: "Clean the garage this weekend.", checked: false},
    {id: '8', title: "Read a chapter of a book.", checked: false},
    {id: '9', title: "Update resume for job search.", checked: false},
    {id: '10', title: "Plan weekend trip with friends.", checked: false},
    {id: '11', title: "Water the plants outside.", checked: true},
    {id: '12', title: "Organize desk and files.", checked: true},
    {id: '13', title: "Send thank-you emails.", checked: true},
    {id: '14', title: "Fix leaky kitchen fauce.", checked: true},
    {id: '15', title: "Buy a birthday gift.", checked: true},
    {id: '16', title: "Research vacation destinations.", checked: true},
    {id: '17', title: "Call the car mechanic.", checked: true},
  ]
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks.unshift(task)
  },
  UPDATE_TASK(state, task) {
    let index = state.tasks.findIndex(t => t.id === task.id)
    state.tasks.splice(index, 1, task)
  },
  REMOVE_TASK(state, task) {
    let index = state.tasks.findIndex(t => t.id === task.id)
    state.tasks.splice(index, 1)
  }
}

export const actions = {
  changeTaskStatus({commit}, task) {
    task.checked = !task.checked
    commit('UPDATE_TASK', task)
  },
  addTask({commit}, data) {
    const task = {
      id: String(Date.now()),
      title: data,
      checked: false
    }
    commit('ADD_TASK', task)
  },
  removeTask({commit}, task) {
    commit('REMOVE_TASK', task)
  }
}

export const getters = {
  getTasks(state) {
    return state.tasks
  }
}
