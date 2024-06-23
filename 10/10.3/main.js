let contactBook = {
    contacts: [
      {
        name: "Дмитро Фіночек",
        phone: "+380990008134",
        email: "dmitriy.finochek@gmail.com"
      },
      {
        name: "Аліна Фіночек",
        phone: "+380955798838",
        email: "alina.finochek@gmail.com"
      }
    ],
  
    findContactByName: function(name) {
      return this.contacts.find(contact => contact.name === name);
    },
  
    addContact: function(name, phone, email) {
      this.contacts.push({ name, phone, email });
    }
  };
  
  contactBook.addContact("Олександр Сидоров", "+380555555555", "oleksandr@example.com");
  
  let contact = contactBook.findContactByName("Аліна Фіночек");
  console.log(contact); 
  