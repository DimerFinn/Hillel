class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = grades;
      this.attendance = new Array(25).fill(null); // Масив відвідуваності
    }
  
    // Метод для отримання віку студента
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    // Метод для отримання середнього балу студента
    getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((a, b) => a + b, 0);
      return sum / this.grades.length;
    }
  
    // Метод для позначення присутності
    present() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = true;
      } else {
        console.log("У масиві відвідуваності вже є 25 записів.");
      }
    }
  
    // Метод для позначення відсутності
    absent() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = false;
      } else {
        console.log("У масиві відвідуваності вже є 25 записів.");
      }
    }
  
    // Метод для підсумкового оцінювання
    summary() {
      const averageGrade = this.getAverageGrade();
      const attendanceCount = this.attendance.filter(item => item === true).length;
      const attendanceRate = attendanceCount / this.attendance.length;
  
      if (averageGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
      } else if (averageGrade > 90 || attendanceRate > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  }
  
  // Створення екземплярів студентів
  const student1 = new Student("Іван", "Петров", 2001, [95, 87, 92]);
  const student2 = new Student("Марія", "Іванова", 2002, [88, 79, 85]);
  const student3 = new Student("Олександр", "Сидоренко", 2000, [70, 68, 72]);
  
  // Використання методів
  student1.present();
  student1.present();
  student1.absent();
  console.log(student1.summary());
  
  student2.present();
  student2.present();
  student2.present();
  student2.present();
  console.log(student2.summary());
  
  student3.absent();
  student3.absent();
  console.log(student3.summary());
  