function showDetails(){

    var params = new URLSearchParams(location.search)
    console.log(params.get("id"),'params')
    // var getParams =  window.location.search
    // var filterParams = Number(getParams.slice(4))
    // var findItem = findItemHandler(filterParams)
    var findItem = products.find(function(el){
        if(el.id === filterParams) {
            return el
        }
    })
    // console.log(findItem,'find item')


}

showDetails()

// onAuthStateChanged(auth, function (user) {
//   if (user) {
//     location.href = "dashboard.html";
//   }
// });

// 
function findItemHandler(id){
    var isElementExist = false
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        if(element.id === id) {
            isElementExist = true
            return element
        }
        
    }

    if(!isElementExist){
        return undefined
    }
}