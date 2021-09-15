const students = ['Jonh', 'Mary', 'Denis', 'Lucas', 'Anny']

const studentsAverage = [10, 7, 9, 6]

let scoreListStudents = [students, studentsAverage]

//includes -> boolean - true or false
//indexOf -> where is the index

const showNameScore = (studentName) => {
    if (scoreListStudents[0].includes(studentName)){
        index = scoreListStudents[0].indexOf(studentName)
        return scoreListStudents[0][index] + ` your average is ` + scoreListStudents[1][index]
       //access ->score list student->student name-> then index of it // access ->score list student->student average-> then index of it
    }else{                          
        return "Student not found "
    }
}
console.log(showNameScore("Jeff"))