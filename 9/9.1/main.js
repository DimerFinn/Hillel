let departments = {
  sales: [
    {name: 'John', salary: 1000}, 
    {name: 'Alice', salary: 600}
  ],
  development: {
    web: [
      {name: 'Peter', salary: 2000}, 
      {name: 'Alex', salary: 1800}
    ],
    internals: [
      {name: 'Jack', salary: 1300}
    ]
  }
};

function calculateTotalSalary(departments) {
  let totalSalary = 0;

  for (const department in departments) {
    const value = departments[department];

    if (Array.isArray(value)) {
      for (const employee of value) {
        totalSalary += employee.salary;
      }
    } else {
      totalSalary += calculateTotalSalary(value);
    }
  }

  return totalSalary;
}

const totalSalary = calculateTotalSalary(departments);
console.log(totalSalary);
