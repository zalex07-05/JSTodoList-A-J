import Alert from './alert.js';

export default class AddTodo {
  constructor() {
    this.btn = document.getElementById('add');
    this.title = document.getElementById('title');
    this.description = document.getElementById('description');
    this.dueDate = document.getElementById('dueDate');

    this.alert = new Alert('alert');
  }

  onClick(callback) {
    this.btn.onclick = () => {
      if (title.value === '' || description.value === '' || dueDate.value === '') {
        this.alert.show('Title, description and due date are required');
      } else {
        this.alert.hide();
        callback(this.title.value, this.description.value, this.dueDate.value);
        this.title.value = '';
        this.description.value = '';
        this.dueDate.value = '';
      }
    }
  }
}
