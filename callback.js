const names = ["Ana", "Ju", "Leo", "Paula"]

names.forEach(printNames)

function printNames(name){
    console.log(name)
}

// extra point

const scores = [10, 9, 8, 7, 6]

const actualScores = scores.map( score=> score == 10 ? score : ++score)

console.log(actualScores)