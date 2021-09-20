const names = ["Ana", "Marcos", "Maria", "Mauro"]
const scores = [7, 4.5, 8, 7.5]

const failed = names.filter((student, index)=> scores [index] < 5)
console.log(`failed: ${failed}`)