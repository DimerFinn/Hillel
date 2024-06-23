const departments = {
    "HR": [
      { "name": "John", "salary": 5000 },
      { "name": "Jane", "salary": 6000 }
    ],
    "Engineering": [
      { "name": "Alice", "salary": 7000 },
      { "name": "Bob", "salary": 8000 }
    ],
    "Sales": [
      { "name": "Eve", "salary": 7500 },
      { "name": "Mallory", "salary": 7200 }
    ]
  };
  
  function calculateTotalSalary(departments) {
    let totalSalary = 0;
    for (const department in departments) {
      for (const employee of departments[department]) {
        totalSalary += employee.salary;
      }
    }
    return totalSalary;
  }
  
  const totalSalary = calculateTotalSalary(departments);
  console.log(totalSalary);