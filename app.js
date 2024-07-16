const cardArray = [
    {
      name: "Naruto"  ,
      img: "images/naru.jpg"
    },
    {
      name: "Sasuke"  ,
      img: "images/sasu.jpg"
    },
    {
      name: "Hinata"  ,
      img: "images/hina.jpg"
    },
    {
      name: "Kakashi"  ,
      img: "images/kaka.jpg"
    },
    {
      name: "Shikamaru"  ,
      img: "images/shika.jpg"
    },
    {
      name: "Sakura"  ,
      img: "images/saku.jpg"
    },
    {
        name: "Naruto"  ,
        img: "images/naru.jpg"
      },
      {
        name: "Sasuke"  ,
        img: "images/sasu.jpg"
      },
      {
        name: "Hinata"  ,
        img: "images/hina.jpg"
      },
      {
        name: "Kakashi"  ,
        img: "images/kaka.jpg"
      },
      {
        name: "Shikamaru"  ,
        img: "images/shika.jpg"
      },
      {
        name: "Sakura"  ,
        img: "images/saku.jpg"
      }

]

cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
let cardSelected = []
let cardSelectedId = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
         card.setAttribute("src","images/konoha.jpg")
         card.setAttribute("data-id", i )
        card.addEventListener("click", flipCard)
         gridDisplay.append(card)    
    }
}
createBoard()


function checkMatch() {

    const cards = document.querySelectorAll("img")
    const option1Id = cardSelectedId[0]
    const option2Id = cardSelectedId[1]
    console.log("check for match! ")
    if (option1Id == option2Id) {
        cards[option1Id].setAttribute("src", "images/konoha.jpg")
        cards[option2Id].setAttribute("src", "images/konoha.jpg")
        alert("shinra tense!")
    }


    if (cardSelected[0] == cardSelected[1]) {
        alert("Kage-bunshin no jutsu!")

        cards[option1Id].setAttribute("src", "images/white.jpg")
        cards[option2Id].setAttribute("src", "images/white.jpg")
        cards[option1Id ].removeEventListener("click", flipCard)
        cards[option2Id].removeEventListener("click", flipCard)
        cardsWon.push(cardSelected)
    } else {
        cards[option1Id].setAttribute("src", "images/konoha.jpg")
        cards[option2Id].setAttribute("src", "images/konoha.jpg")
        alert("try again")
    }
    resultDisplay.textContent = cardsWon.length
    cardSelected = []
    cardSelectedId = []
}

if (cardsWon.length == cardArray.length/2 ) {
resultDisplay.textContent = "congratulations, you gotta nice Byakugan"
}

function flipCard() {
const cardId = this.getAttribute("data-id")
cardSelected.push(cardArray[cardId].name)
cardSelectedId.push(cardId)
console.log(cardSelected)
console.log(cardSelectedId)
this.setAttribute("src", cardArray[cardId].img)
if (cardSelected.length === 2) {
    setTimeout(checkMatch, 500)
}

}

