let content= document.querySelector("#content")
let submit=document.querySelector("#submit")
let message=document.querySelector("#message")
let like=document.querySelector("#like")
let comment=document.querySelector("#comment")
let share=document.querySelector("#share")
let commentSection=document.querySelector("#commentSection")
let submitComment=document.querySelector("#submitComment")
let Likescount=0;

window.addEventListener("load", () => {
  let savedPost = JSON.parse(localStorage.getItem("post"));
  
  if (savedPost) {
    message.textContent = savedPost.content;  // Set saved post content
    Likescount = savedPost.likes;  // Restore saved like count
    like.textContent = `Likes ${Likescount}`;  // Update the like button text
    
    // Restore the visibility of the comment section
    if (savedPost.commentSectionVisible) {
      commentSection.style.display = "block";
    }

    // Show the posted content and buttons
    document.querySelector("#postedContent").style.display = "block";
  }
});






submit.addEventListener("click",()=>{
  if (content.value.trim() !==""){
    
    let postData = {
      content: content.value.trim(),
      likes: Likescount,
      commentSectionVisible: false  // Initially, the comment section is hidden
    };

    // Save the post data to localStorage
    localStorage.setItem("post", JSON.stringify(postData));

    
    
    
    message.textContent=content.value;
    document.querySelector("#postedContent").style.display="block";
    content.value="";
    
  }
});

like.addEventListener("click",()=>{
  Likescount++;
  like.textContent=`Likes ${Likescount}`;
  
  let savedPost = JSON.parse(localStorage.getItem("post"));
  savedPost.likes = Likescount;
  localStorage.setItem("post", JSON.stringify(savedPost));

  
  
  
});
comment.addEventListener("click",()=>{
  // commentSection.style.display=commentSection.style.display==="none"? "block":"none";
  
  
  let savedPost = JSON.parse(localStorage.getItem("post"));
  let isVisible = commentSection.style.display === "block";

  // Update the comment section visibility state in localStorage
  savedPost.commentSectionVisible = !isVisible;
  localStorage.setItem("post", JSON.stringify(savedPost));

  // Show or hide the comment section
  commentSection.style.display = isVisible ? "none" : "block";

  
  
});
share.addEventListener("click",()=>{
  alert("post shared!");
});
submitComment.addEventListener("click",()=>{
  let commentInput= document.querySelector("#commentInput").value;
  if (commentInput.trim()!==""){
    alert("Comment Submited  "+ commentInput);
    commentInput.value="";
  }
  
  
  
});








