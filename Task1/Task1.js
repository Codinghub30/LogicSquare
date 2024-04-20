function generateStudentMarkSheets(students, details) {
    const finalMarkSheets = [];

    students.map(student => {
        const studentDetails = details.find(detail =>  {

          return detail.Roll === student.Roll

    });
       
        const subjects = studentDetails && studentDetails.subjects || {};
        let total = 0;
        for (const subject in subjects) {
            total += subjects[subject];
        }

       let status;

        if(total >= 200){
            status = "Pass";
        }
        else{
            status="fail";
        }

        const markSheet = { name: student.name, Roll: student.Roll, ...subjects, total, status };
        //If you don't use the spread operator (...) to merge the subjects object into the markSheet object, each subject will be added as a separate property instead of being merged into subjects. Let's see how it looks without the spread operator:

        // Using the spread operator (...) is a concise way to merge objects in JavaScript. It helps to flatten the subjects object and directly add its properties to markSheet, which makes the code cleaner and easier to read.

        finalMarkSheets.push(markSheet);
    });

    return finalMarkSheets;
}

// Input data
const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
];

const Details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
];

// Generate student mark sheets
const studentsMarkSheets = generateStudentMarkSheets(students, Details);

console.log(studentsMarkSheets);