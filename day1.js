// ========================================
// DAY 1 PRACTICE: Variables, Functions & Destructuring
// ========================================

// ========== VARIABLES ==========

// Exercise 1: Variable Declaration
// Declare variables using const, let, and var
const city = "New York";
let temperature = 25;
var isRaining = false;

console.log("Exercise 1 - Variables:");
console.log(city, temperature, isRaining);

// Exercise 2: Reassigning and Scoping
let count = 0;
count = 5;
console.log("Exercise 2 - Reassigned count:", count);

// Exercise 3: Template Literals
const name = "Alice";
const age = 28;
console.log(`Exercise 3: ${name} is ${age} years old`);

// Exercise 4: Object as a variable
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "Boston"
};
console.log("Exercise 4 - Person object:", person);

// ========== FUNCTIONS ==========

// Exercise 5: Simple Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log("Exercise 5:", greet("Bob"));

// Exercise 6: Function with Multiple Parameters
function add(a, b) {
  return a + b;
}
console.log("Exercise 6 - Add 10 + 5:", add(10, 5));

// Exercise 7: Arrow Function
const multiply = (x, y) => x * y;
console.log("Exercise 7 - Multiply 4 * 3:", multiply(4, 3));

// Exercise 8: Function with Default Parameters
function createUser(name = "Guest", role = "user") {
  return { name, role };
}
console.log("Exercise 8 - Default params:", createUser());
console.log("Exercise 8 - With params:", createUser("Sarah", "admin"));

// Exercise 9: Function Returning Multiple Values (array)
function getCoordinates() {
  return [10, 20];
}
console.log("Exercise 9 - Coordinates:", getCoordinates());

// Exercise 10: Function Returning an Object
function getUserInfo() {
  return {
    name: "Charlie",
    email: "charlie@example.com",
    verified: true
  };
}
console.log("Exercise 10 - User info:", getUserInfo());

// ========== DESTRUCTURING ==========

// Exercise 11: Array Destructuring - Basic
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log("Exercise 11 - Colors:", firstColor, secondColor, thirdColor);

// Exercise 12: Array Destructuring - Skipping Elements
const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers;
console.log("Exercise 12 - First and third:", first, third);

// Exercise 13: Array Destructuring - Rest Operator
const [head, ...tail] = [10, 20, 30, 40];
console.log("Exercise 13 - Head:", head, "Tail:", tail);

// Exercise 14: Object Destructuring - Basic
const student = {
  studentName: "Diana",
  studentAge: 22,
  grade: "A"
};
const { studentName, studentAge, grade } = student;
console.log("Exercise 14 - Student:", studentName, studentAge, grade);

// Exercise 15: Object Destructuring - Renaming
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023
};
const { brand: carBrand, model: carModel } = car;
console.log("Exercise 15 - Car:", carBrand, carModel);

// Exercise 16: Object Destructuring - Default Values
const settings = { theme: "dark" };
const { theme = "light", language = "en" } = settings;
console.log("Exercise 16 - Theme:", theme, "Language:", language);

// Exercise 17: Nested Destructuring
const company = {
  name: "TechCorp",
  address: {
    street: "123 Main St",
    city: "San Francisco"
  }
};
const { name, address: { city } } = company;
console.log("Exercise 17 - Company:", name, "City:", city);

// Exercise 18: Destructuring Function Parameters
function displayProduct({ productName, price, inStock }) {
  console.log(`${productName} costs $${price}, In stock: ${inStock}`);
}
displayProduct({ productName: "Laptop", price: 999, inStock: true });

// Exercise 19: Destructuring with Array of Objects
const users = [
  { id: 1, username: "user1" },
  { id: 2, username: "user2" }
];
const [{ id: firstId, username: firstUser }, { id: secondId }] = users;
console.log("Exercise 19 - First user ID:", firstId, "Username:", firstUser);

// Exercise 20: Combining Everything
function processData(data) {
  const { items: [first, ...rest], meta: { total } } = data;
  return { first, rest, total };
}
const testData = {
  items: ["apple", "banana", "cherry"],
  meta: { total: 3 }
};
console.log("Exercise 20 - Combined:", processData(testData));

// ========== PRACTICE CHALLENGES ==========

// Challenge 1: Calculate BMI
const calculateBMI = (weight, height) => {
  return weight / (height * height);
};
console.log("Challenge 1 - BMI:", calculateBMI(70, 1.75));

// Challenge 2: Extract user data
const userData = {
  profile: {
    name: "Eve",
    email: "eve@example.com",
    phone: "555-1234"
  },
  settings: {
    notifications: true,
    privacy: "public"
  }
};
const { profile: { name: userName, email }, settings: { notifications } } = userData;
console.log("Challenge 2 - User:", userName, email, "Notifications:", notifications);

// Challenge 3: Function with destructuring and defaults
const fetchUserConfig = ({ userId, format = "json", cache = true }) => {
  return { userId, format, cache };
};
console.log("Challenge 3:", fetchUserConfig({ userId: 42 }));

console.log("\n✅ Day 1 exercises completed!");
