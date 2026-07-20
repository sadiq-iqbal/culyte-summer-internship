
Practice: given a raw array of objects, write functions to filter, transform, and search it — plain JS, no React yet
#Data 
 const users = [
  {
    id: 1,
    name: "Ali",
    age: 22,
    country: "Pakistan",
    skills: ["JavaScript", "React"],
    isActive: true
  },
  {
    id: 2,
    name: "Sara",
    age: 25,
    country: "Germany",
    skills: ["Python", "Django"],
    isActive: true
  },
  {
    id: 3,
    name: "John",
    age: 19,
    country: "USA",
    skills: ["JavaScript", "Node.js"],
    isActive: false
  },
  {
    id: 4,
    name: "Ayesha",
    age: 28,
    country: "Pakistan",
    skills: ["JavaScript", "Node.js", "MongoDB"],
    isActive: true
  }
];

// Filter active users.
// Filter users from Pakistan.
// Transform users into a simpler format.
// Search users by name.
// Search users by skill.
// Combine all of these operations.


function getActiveUsers(users) {
  return users.filter(user => user.isActive);
}

function getPakistaniUsers(users) {
  return users.filter(user => user.country === "Pakistan");
}

function getUserNames(users) {
  return users.map(user => user.name);
}

function searchByName(users, searchTerm) {
  return users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function searchBySkill(users, skill) {
  return users.filter(user =>
    user.skills.includes(skill)
  );
}
