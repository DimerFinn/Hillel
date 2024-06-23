let user = {
    name: "Dmytro",
    age: 45,
    residence: "Poznan",
    occupation: "TruckDriver",
    email: "dmitriy.finochek@gmail.com",
  
    displayInfo: function() {
      console.log(`Ім'я: ${this.name}`);
      console.log(`Вік: ${this.age}`);
      console.log(`Місце проживання: ${this.residence}`);
      console.log(`Професія: ${this.occupation}`);
      console.log(`Електронна пошта: ${this.email}`);
    }
  };
  user.displayInfo();