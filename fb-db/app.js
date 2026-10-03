import { getDatabase, ref, set, onValue, update, remove } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const db = getDatabase();

var pstTitle = document.getElementById("pst-title")
var pstDesc = document.getElementById("pst-desc")
var pstUser = document.getElementById("pst-user")
var userId = document.getElementById("user-id")
var crtBtn = document.getElementById("crt-btn")
var getBtn = document.getElementById("get-btn")
var updBtn = document.getElementById("upd-btn")
var dltBtn = document.getElementById("dlt-btn")

crtBtn.addEventListener("click", function () {

    set(ref(db, `posts/${userId.value}`), {
        pstTitle: pstTitle.value,
        pstDesc: pstDesc.value,
        pstUser: pstUser.value
    });

})

getBtn.addEventListener("click", function () {


    const starCountRef = ref(db, 'posts');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data, 'posts data')
    });

})


updBtn.addEventListener("click", function () {

    var postData =
    {
        pstTitle: pstTitle.value,
        pstDesc: pstDesc.value,
        pstUser: pstUser.value
    }


    const updates = {};
    updates[`/posts/${userId.value}`] = postData;

    return update(ref(db), updates);

})


dltBtn.addEventListener("click", function(){
    //  set(ref(db, `posts/${userId.value}`)
    //  remove(ref(db,`posts/${userId.value}`))
     remove(ref(db,'posts/'))
})