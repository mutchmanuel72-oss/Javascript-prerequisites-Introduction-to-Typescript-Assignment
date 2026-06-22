import formatCurrency, { add, capitalize, APP_VERSION } from "./utils.js";

// 1. Arrow Functions
const square = n => n * n;
const greet = name => `Hello, ${name}!`;
const multiply = (a, b) => a * b;
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(square(5));
console.log(greet("Amaka"));
console.log(multiply(4, 3));
console.log(getFullName("John", "Doe"));

// 2. Destructuring
const studentInfo = {
  name: "Amaka",
  age: 22,
  course: "Frontend Development",
  city: "Abuja"
};

const scores = [88, 72, 95, 60, 45];

const { name, course } = studentInfo;
const { age: studentAge } = studentInfo;
const [firstScore, secondScore] = scores;

console.log(name);
console.log(course);
console.log(studentAge);
console.log(firstScore);
console.log(secondScore);

// 3. Spread Operator
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];

const userProfile = {
  username: "coder_ade",
  email: "ade@example.com"
};

const fullStack = [...frontend, ...backend];

const updatedProfile = {
  ...userProfile,
  email: "newemail@example.com"
};

console.log(fullStack);
console.log("Original profile:", userProfile);
console.log("Updated profile:", updatedProfile);

// 4. Template Literals
const personName = "Fatima";
const personAge = 24;

const intro = `My name is ${personName} and I am ${personAge} years old.`;
console.log(intro);

const width = 8;
const height = 5;

console.log(`The area of the rectangle is ${width * height}`);

// 5. Array Methods
const products = [
  { name: "Laptop", price: 450000, inStock: true },
  { name: "Mouse", price: 8000, inStock: true },
  { name: "Monitor", price: 120000, inStock: false },
  { name: "Keyboard", price: 15000, inStock: true }
];

const productNames = products.map(product => product.name);
const inStockProducts = products.filter(product => product.inStock);
const availableProductNames = products
  .filter(product => product.inStock)
  .map(product => product.name.toUpperCase());

console.log(productNames);
console.log(inStockProducts);
console.log(availableProductNames);

// 6. Ternary and Logical &&
const role = "editor";
const cartItems = 0;

const access =
  role === "admin"
    ? "Full Access"
    : role === "editor"
    ? "Edit Access"
    : role === "viewer"
    ? "Read Only"
    : "No Access";

console.log(access);

// This returns 0 because cartItems is 0, which is false
console.log(cartItems && "View Cart");

// This only shows "View Cart" if cartItems is greater than 0
console.log(cartItems > 0 && "View Cart");

// 7. ES Modules
console.log(add(10, 5));
console.log(capitalize("javascript"));
console.log(APP_VERSION);
console.log(formatCurrency(45000));