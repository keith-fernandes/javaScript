const numbers = [100, 200, 300, 400, 500, 600]

for (let i = 0; i < numbers.length; i++){
    console.log(i, numbers[i])
}


// average

const score = [10, 6.5, 8, 7.5]

let totalScore = 0

for (i=0; i<score.length; i++){
    totalScore += score[i];
}

let average = totalScore/score.length

console.log(average)

// for each

const score2 = [10, 6.5, 8, 7.5]

let totalScore2 = 0 

//callback
score2.forEach(nota => {
    totalScore2 += nota
})

let average2 = totalScore2/score2.length

console.log(average2)

// for matrix 2D

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

media = media/notasGerais.length

console.log(media)