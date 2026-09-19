// console.log("hello world")

// setTimeout , setInterval, clearInterval, clearTimeout

// synchronous functions, asynchronous functions
// console.log("First console")



// setTimeout(()=>{
//     console.log("Second console")
// },0)

// console.log("Third console")


// call stack, browser apis, queues


// localStorage.setItem("username","usama")
// localStorage.setItem("location","karachi")
// localStorage.setItem("uni","abc")
// console.log(localStorage.length)
// localStorage.removeItem("uni")
// localStorage.clear()

// var arr = [1,2,3]
// localStorage.setItem("arr",JSON.stringify(arr))
// console.log(JSON.parse( localStorage.getItem("arr"))) 
// console.log("[1,2,3]") 



// var card ={
//     prdName:"abc",
//     prdCategory:"cars",
//     prdQuantity: 10
// }

// card.prodName
// delete card.prdCategory
// card.prdQuantity = 9
// card.prdLocation = "karachi"

// var arr = [card1,card2,card3]


// var arr = [
//     {
//         prodTitle: "abc",
//         prodCategory: "cars",
//         prodLocation: "karachi",
//         quantity:0,
//         prodPrice:23,
//     },
//     {
//         prodTitle: "abc",
//         prodCategory: "bikes",
//         prodLocation: "karachi"
//     },
//     {
//         prodTitle: "abc",
//         prodCategory: "electronics",
//         prodLocation: "karachi",

//     },
// ]

// console.log(arr[1].prodCategory)

// function showCards() {
//     var cards = document.getElementById("cards")

//     for (let i = 0; i < arr.length; i++) {

//         cards.innerHTML += `
//          <div style="width: 200px;height: 200px;background-color: red;border: 1px solid black;">
//             <p>${arr[i].prodTitle}</p>
//             <p>${arr[i].prodCategory}</p>
//             <p>${arr[i].prodLocation}</p>
//             <button onclick="addToCart(${i})" >Add to cart</button>
//         </div>
//         `
//     }


// }

// showCards()

// function addToCart(prodIndex){
// console.log(arr[prodIndex])

// var isProdExist = localStorage.getItem("products")

// if(!isProdExist){
//     localStorage.setItem("products", JSON.stringify( [arr[prodIndex]]))

// }
// else{
//     var getArr = JSON.parse( localStorage.getItem("products"))
//     getArr.push(arr[prodIndex])
//     localStorage.setItem("products",JSON.stringify(getArr))
//     console.log(getArr)
// }

// }



var questions = [
    {
        question:"What is html",
        option1:"hyper text",
        option2:"programming language",
        option3:"hyper text markup language",
        correctAns:"hyper text markup language",

    },
    {
        question:"What is css",
        option1:"hyper text",
        option2:"programming language",
        option3:"hyper text markup language",
        correctAns:"hyper text markup language"
    },
    {
        question:"What is JS",
        option1:"hyper text",
        option2:"programming language",
        option3:"hyper text markup language",
        correctAns:"hyper text markup language"
    }
]

var count = 0
var score = 0
function showQuestions(){
    var cards = document.getElementById("cards")
    cards.innerHTML=`
        <div>
        <p>Question: ${questions[count].question}</p> 
        <p>Option 1:${questions[count].option1} </p> 
        <p>Option 2:${questions[count].option2} </p> 
        <p>Option 3:${questions[count].option3} </p> 
        <button onclick="onNext()">Next</button>
        </div>
    `
}

showQuestions()
function onNext(){
    console.log(count)
    count++
    showQuestions()
}


l