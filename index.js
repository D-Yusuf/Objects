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

/////////////////
const students = [
    {
      studentId: 1,
      name: "Alice Johnson",
      subjects: [
        {
          subjectName: "Mathematics",
          teacher: "Mr. Smith",
          grades: {
            midterm: 88,
            final: 92,
            homework: [
              { assignmentId: 1, score: 85 },
              { assignmentId: 2, score: 90 },
              { assignmentId: 3, score: 95 },
            ],
          },
        },
        {
          subjectName: "History",
          teacher: "Mrs. Davis",
          grades: {
            midterm: 75,
            final: 80,
            homework: [
              { assignmentId: 1, score: 70 },
              { assignmentId: 2, score: 85 },
              { assignmentId: 3, score: 90 },
            ],
          },
        },
      ],
    },
    {
      studentId: 2,
      name: "Bob Williams",
      subjects: [
        {
          subjectName: "Science",
          teacher: "Dr. Brown",
          grades: {
            midterm: 91,
            final: 87,
            homework: [
              { assignmentId: 1, score: 89 },
              { assignmentId: 2, score: 93 },
              { assignmentId: 3, score: 88 },
            ],
          },
        },
        {
          subjectName: "English",
          teacher: "Ms. Green",
          grades: {
            midterm: 84,
            final: 89,
            homework: [
              { assignmentId: 1, score: 82 },
              { assignmentId: 2, score: 87 },
              { assignmentId: 3, score: 91 },
            ],
          },
        },
      ],s
    },
  ];
console.log(students[0].subjects[1].grades.homework[0].score+students[0].subjects[1].grades.homework[1].score+students[0].subjects[1].grades.homework[2].score);
