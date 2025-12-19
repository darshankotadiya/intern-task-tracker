// Initial Intern Data
const intern = {
    id: 1,
    name: "Darshan",
    skills: ["HTML", "CSS"],
    status: "Learning"
};

// Spread Operator use kari ne data update karyo
export const updatedIntern = { 
    ...intern, 
    skills: [...intern.skills, "JavaScript", "Modern JS"],
    status: "Working" 
};