const jSClass = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const javaClass = [6, 5, 8, 9, 5, 6]
const pythonClass = [7, 3.5, 8, 9.5]

function classAverage (classScore){
    const scoreAdded = classScore.reduce((acum, actual) =>
    actual + acum,0)
    return scoreAdded/classScore.length
}

console.log(`Java Script average score ${classAverage(jSClass)}`)
console.log(`Java average score ${classAverage(javaClass)}`)
console.log(`Python average score ${classAverage(pythonClass)}`)


const scores = [10, 6.5, 8, 7]

const average = scores.reduce((acum, actual) => actual + acum,0) / scores.length

console.log(average)