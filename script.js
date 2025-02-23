let content = document.querySelector("#content")
let submit = document.querySelector("#submit")
let message = document.querySelector("#message")
let like = document.querySelector("#like")
let comment = document.querySelector("#comment")
let share = document.querySelector("#share")
let commentSection = document.querySelector("#commentSection")
let submitComment = document.querySelector("#submitComment")
let Likescount = 0;
submit.addEventListener("click", () => {
    if (content.value.trim() !== "") {
        message.textContent = content.value;
        document.querySelector("#postedContent").style.display = "block";
        content.value = "";

    }
});

like.addEventListener("click", () => {
    Likescount++;
    like.textContent = `Likes ${Likescount}`;



});
comment.addEventListener("click", () => {
    commentSection.style.display = commentSection.style.display === "none" ? "block" : "none";


});
share.addEventListener("click", () => {
    alert("post shared!");
});
submitComment.addEventListener("click", () => {
    let commentInput = document.querySelector("#commentInput").value;
    if (commentInput.trim() !== "") {
        alert("Comment Submited  " + commentInput);
        commentInput.value = "";
    }



});