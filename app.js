const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Mata Kuliah Selasa",
      kelas1: "Pemrograman Web - Ridho Rahman",
      kelas2: "Konsep Pengembangan Perangkat Lunak - Umi Laili Yuhana",
      kelas3: "Object Oriented Programming - Irfan Subakti",
      kelas4: "Internet of Things - M Husni",
    };
  },
}).mount("#app");
