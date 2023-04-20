 // ITCS227 Source Code Template for 2T AY 2022-2023

/*
    Progam: Computation of Grades using Function
    Programmer: Juan Dela Cruz
    Section: BCS22
    Start Date: April 17, 2023
    End Date: April 20, 2023
*/

/*The program
should display the name of the student, Class Participation, Summative Grade, Grade and the
corresponding letter grade for each student based on the following grade system:*/


const prompt = require('prompt-sync')();
const Table = require('cli-table');

//student data (objects)
let student1 = {
    name: 'Hazel Wong',
    classParticipation: [],
    summativeGrade: [],
    finalExaminationGrade: 0,
    finalExaminationAve:0,
    classAve: 0,
    summativeAve: 0,
    finalGrade: 0,
    remarks: ''
}
let student2 = {
    name: 'Lucas Chen',
    classParticipation: [],
    summativeGrade: [],
    finalExaminationGrade: 0,
    finalExaminationAve:0,
    classAve: 0,
    summativeAve: 0,
    finalGrade: 0,
    remarks: ''
}
let student3 = {
    name: 'Grace Rodriguez',
    classParticipation: [],
    summativeGrade: [],
    finalExaminationGrade: 0,
    finalExaminationAve:0,
    classAve: 0,
    summativeAve: 0,
    finalGrade: 0,
    remarks: ''
}
let student4 = {
    name: 'Aiden Lee',
    classParticipation: [],
    summativeGrade: [],
    finalExaminationGrade: 0,
    finalExaminationAve:0,
    classAve: 0,
    summativeAve: 0,
    finalGrade: 0,
    remarks: ''
}
let student5 = {
    name: 'Sophia Patel',
    classParticipation: [],
    summativeGrade: [],
    finalExaminationGrade: 0,
    finalExaminationAve:0,
    classAve: 0,
    summativeAve: 0,
    finalGrade: 0,
    remarks: ''
}
/* Function for generating random inputs from 59-100
function generateRandomNumber() {
    const min = 59;
  const max = 100;
  const range = max - min;
  const randomNumber = Math.random() * range + min;
  return Math.floor(randomNumber);
  } */
  
//list of objects
const students = [student1, student2, student3, student4, student5] 

//loop for collecting INPUTS
for(let x = 0; x<students.length; x++){ //for(let x = 0; x<students.length; x++)
    console.log(`Enter grades of Student no.${x+1}`)

    // loop for class participation grade
    for(let j = 0; j<5; j++){
        //students[x].classParticipation.push(parseInt(generateRandomNumber()))  //generate user input instead of inserting
        students[x].classParticipation.push(parseInt(prompt(`Enter enabling assessment ${j+1} grade: `)))
    } // end loop

    // loop for summative grade
    for(let i = 0; i<3; i++){
        //students[x].summativeGrade.push(parseInt(generateRandomNumber()))     //generate user input instead of inserting
        students[x].summativeGrade.push(parseInt(prompt(`Enter summative assessment ${i+1} grade: `)))
    } //end loop

    // inserting final examination grade

        //students[x].finalExaminationGrade = parseInt(generateRandomNumber())  ////generate user input instead of inserting
        students[x].finalExaminationGrade = parseInt(prompt(`Enter student no.${x+1} major exam score: `))

        students[x].finalExaminationAve = (students[x].finalExaminationGrade)*.30 // final examination grade average
} // end loop

// function to compute average of class participation grade
function classParticipationAve(studentKey, length){
    let result =0;
    for(let x = 0; x<studentKey.length; x++){
        result += studentKey[x]
    }
    // return sum of grade
    return (result / length)*.30
}

// function to compute average of summative grade
function summativeGradeAve(studentKey, length){
    let result =0;
    for(let x = 0; x<studentKey.length; x++){
        result += studentKey[x]
    }
    // return sum of grade
    return (result / length)*.30
}

// computing average grades of students
for (let x = 0; x<students.length; x++){
    students[x].classAve = classParticipationAve(students[x].classParticipation, students[x].classParticipation.length)
    students[x].summativeAve = summativeGradeAve(students[x].summativeGrade, students[x].summativeGrade.length)
    students[x].finalGrade = Math.floor(students[x].classAve + students[x].summativeAve + students[x].finalExaminationAve)
}

//function for identifying student remarks
function remarks (finalGrade, studentRemarks){
        if(finalGrade >= 90 && finalGrade <=100){
            return studentRemarks = 'A'
        } else if(finalGrade >= 80 && finalGrade <=89){
            return studentRemarks = 'B'
        } else if(finalGrade >= 70 && finalGrade <=79){
            return studentRemarks = 'C'
        } else if(finalGrade >= 60 && finalGrade <=69){
            return studentRemarks = 'D'
        } else if(finalGrade < 60){
            return studentRemarks = 'F'
        }
}

//loop for updating values in students data (remarks)
for(let x = 0; x<students.length; x++){
    students[x].remarks = remarks(students[x].finalGrade)
} // end of loop


//Displaying the table values
const table = new Table({
    head: ['Name of Student', 'Class Participation', 'Summative Assessment', 'Exam Grade', 'Grade Score', 'Letter Grade'],
    colWidths: [20, 30, 30, 15, 15, 20]
  });
  
  for(let x=0; x<students.length; x++){
    table.push(
        [students[x].name, students[x].classAve, students[x].summativeAve, students[x].finalExaminationAve, students[x].finalGrade, students[x].remarks]
      );
}
  console.log(table.toString());