/* 
After yet another dispute on their game the Bingo Association decides to change course and automate the game.

Can you help the association by writing a method to create a random Bingo card?

Bingo Cards
A Bingo card contains 24 unique and random numbers according to this scheme:

5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75
Task
Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

a bingo card

*/

function randomNumGenerator(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min)


}

function findUniqueNum(arr, max, min, randomNum){
    let num 

    if(!arr.some(num=>num===randomNum)){
        arr.push(randomNum)
        return randomNum
    }else{
        num = randomNumGenerator(max, min)
        if(arr.some(num=>num===num)){
            arr.push(randomNum)
            return num
        }else{
            return findUniqueNum(arr, max, min, randomNum)
        }

    }


}

function getCard() {
    // Start your coding here...
  let bingoArray = []
  let randomNums = []
  let currentLetter = 'B'
  let max = 15
  let min = 1
  let randomNum 

    for(let i = 0; i < 24; i++){


        if(i===5){
            currentLetter = 'I'
            max = 30
            min = 16
        }

        if(i === 10){
            currentLetter = 'N'
            max = 45
            min = 31
        }

        if(i === 15){
            currentLetter = 'G'
            max = 60
            min = 46
        }

        if(i === 20){
            currentLetter = 'O'
            max = 75
            min = 61
        }

        randomNum = randomNumGenerator(max, min)
        if(randomNums.some(num=>num === randomNum)){
            randomNum = findUniqueNum(randomNums, max, min, randomNum)
            debugger

        }


        if(!randomNums.some(num=>num === randomNum)){
            bingoArray.push(`${currentLetter}${randomNum}`)
            randomNums.push(randomNum)
        }



    }


  return bingoArray

}