const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "",
      todos: [
        {
          text: "Fare i compiti",
          done: false,
        },
        {
          text: "Fare la spesa",
          done: true,
        },
        {
          text: "Fare il bucato",
          done: false,
        },
      ],
    };
  },
  methods: {
    delTask(index) {
      this.todos.splice(index, 1);
    },
    addTask() {
      // if (this.message.trim() !== "") {
      //   this.todos.push({ text: this.message });
      //   this.message = "";
      // }
      this.todos.unshift({ text: this.message });
      this.mesage = "";
    },
  },
}).mount("#app");
