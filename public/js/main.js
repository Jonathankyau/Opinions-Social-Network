const deleteBtn = document.querySelectorAll(".del");
const todoItem = document.querySelectorAll("span.not");
const todoComplete = document.querySelectorAll("span.completed");
const likes = document.querySelectorAll(".fa-thumbs-up");
const downvotes = document.querySelectorAll(".fa-thumbs-down");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteOpinion);
});

Array.from(likes).forEach((el) => {
  el.addEventListener("click", likeOpinion);
});

Array.from(downvotes).forEach((el) => {
  el.addEventListener("click", downvoteOpinion);
});

// Array.from(todoItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

async function deleteOpinion() {
  const opinionId = this.parentNode.parentNode.dataset.id;
  console.log(opinionId);
  try {
    const response = await fetch("opinions/deleteOpinion", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        opinionIdFromJSFile: opinionId
      })
    });
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function likeOpinion() {
  const opinionId = this.parentNode.parentNode.dataset.id;
  try {
    const response = await fetch("/feed/like", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        opinionId
      })
    });
    const data = await response.json();
    console.log(data.message);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function downvoteOpinion() {
  const opinionId = this.parentNode.parentNode.dataset.id;
  try {
    const response = await fetch("/feed/downvote", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        opinionId
      })
    });
    const data = await response.json();
    console.log(data.message);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
// async function markComplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }
