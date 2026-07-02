// 1. Basic Types
let studentName: string = "Tunde";
let studentAge: number = 21;
let isEnrolled: boolean = true;

// The original one was wrong because it used number for a text value
let courseName: string = "Frontend Development";

// 2. Typed Functions
function addNumbers(a: number, b: number): number {
  return a + b;
}

function isAdult(age: number): boolean {
  return age >= 18;
}

function getArea(width: number, height: number): number {
  return width * height;
}

console.log(addNumbers(10, 5));
console.log(isAdult(21));
console.log(getArea(8, 5));

// 3. Objects and Interfaces
interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isActive: boolean;
}

const student1: Student = {
  id: 1,
  name: "Amaka",
  age: 22,
  course: "Frontend Development",
  isActive: true
};

const student2: Student = {
  id: 2,
  name: "Tunde",
  age: 21,
  course: "Backend Development",
  isActive: false
};

interface Instructor {
  name: string;
  cohort: number;
  subjects: string[];
}

function introduceInstructor(instructor: Instructor): string {
  return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

const instructor1: Instructor = {
  name: "Stanley",
  cohort: 8,
  subjects: ["HTML", "CSS", "JavaScript"]
};

console.log(introduceInstructor(instructor1));

// 4. Arrays and Union Types
let names: string[] = ["Ada", "Bola", "Chidi"];
let scores: number[] = [78, 90, 55, 88];

function formatId(id: string | number): string {
  return String(id);
}

console.log(formatId(42));
console.log(formatId("abc"));