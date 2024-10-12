const app = Vue.createApp({
  data() {
    return {
      url: "https://4geeksacademy.com/us/index",
      showBooks: true,
      books: [
        { title: "the philospher stone", author: "JK Rowling", img: 'assets/1.jpg' },
        { title: "the chamber of secrets", author: "JK Rowling", img: 'assets/2.jpg'  },
        { title: "the prisoner of azkaban", author: "Jo Rowling", img: 'assets/3.jpg'  },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
