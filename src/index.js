document.addEventListener('DOMContentLoaded', () => {
const taskForm = document.querySelector('#create-task-form')
const taskDescriptionEl = document.querySelector('input[name=new-task-description]')
const tasksList = document.querySelector('#tasks')

taskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e)
  const taskListEl = document.createElement('li')
  taskListValue = taskDescriptionEl.value
  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'X'
  deleteButton.addEventListener('click', () => {
    console.log(taskListEl)
    taskListEl.remove()
  })
  taskListEl.append(taskListValue, deleteButton)

  tasksList.append(taskListEl)

  })

})
