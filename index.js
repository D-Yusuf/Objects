// - Title: "JavaScript: The Definitive Guide"
// - Author: "David Flanagan"
// - Published Year: 2020
// - Genre: "Programming"
const book = {
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    year: 2020,
    genre: "Programming",
}
const bookTitle = book.title
const bookYear = book["year"]
book.pageCount = 1096
book.ISBN = "978-1491952023"
book.year = 2021
book.author = ["David Flangan", "Another Author"]
book.reviews = [
    {reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."},
    {reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."},
    {reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."},
]
console.log(book)


//////////////////////////////
const students = [
    { name: "ali", grade: 50, dob: "1990", subjects: ["english", "math"] },
    { name: "abdullah", grade: 100, dob: "1993", subjects: ["arabic", "math"] },
    { name: "dawood", grade: 0, dob: "1994", subjects: ["arabic", "math"] },
  ];

const getTotalGrades = ()=>{
    let grades = 0
    students.forEach(student=>grades+=student.grade)
    return grades
}