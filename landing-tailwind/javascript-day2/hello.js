const name = "Prince";
const course = "JavaScript";

function sayHello() {
    document.getElementById("message").textContent =
        `Hello ${name}! Welcome to my ${course} website.`;
}

const person = {
    name: "Prince",
    age: 20,
    country: "Rwanda"
};

const { age, country } = person;

console.log(age);
console.log(country);

const skills = ["HTML", "CSS"];
const newSkills = [...skills, "JavaScript"];

console.log(newSkills);

function showSkills(...skills) {
    console.log(skills);
}

showSkills("HTML", "CSS", "JavaScript", "Node.js", "Python");

const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Python"];

const technologies = [...frontend, ...backend];

console.log(technologies);

function greet(name = "Prince") {
    console.log(`Hello ${name}!`);
}

greet();
greet("John");