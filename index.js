// Write your solution in this file!
// Define the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // 1️⃣ Non-destructive update: Returns a new object with an updated key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // 2️⃣ Destructive update: Modifies the original employee object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 3️⃣ Non-destructive delete: Returns a new object without the deleted key
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4️⃣ Destructive delete: Modifies the original employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
