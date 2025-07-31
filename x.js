document.getElementById("postBtn").addEventListener("click", function () {
  const input = document.getElementById("postTitle");
  const postContainer = document.getElementById("custom-post");

  if (input.value.trim() === "") return;

  const newPost = document.createElement("div");
  newPost.className = " container-fluid";
  newPost.innerHTML = `
    <div id="user-profile-container" class="d-flex">
      <div class="user-profile">
        <img src="profile-photo.png" alt="profile-photo" id="profile-img">
      </div>
      <h6 class="name mt-3">THING.MK 
        <span class="username">@mayankrawat</span> 
        <span id="hours">Just now</span>
      </h6>
    </div>
    <div class="post-caption-container">
      <p>${input.value}</p>
    </div>
    <div class="post-react container-fluid">
      <div class="like-container"><i class="fa-solid fa-thumbs-up"></i><p class="like"></p></div>
      <div class="comment-container"><i class="fas fa-comment"></i></div>
      <div class="share-container"><i class="fas fa-share"></i></div>
      <div class="view-container"><i class="fa-solid fa-eye"></i></div>
    </div>
  `;
  postContainer.prepend(newPost);
  input.value = "";
});



let likescore = Math.floor(Math.random() * 1000 * 150000000000);
let commentscore = Math.floor(Math.random() * 1000);
let sharescore = Math.floor(Math.random() * 10);
let viewscore = Math.floor(Math.random() * 100000 * 220);



let like = document.querySelector('.like');
like.innerText = likescore;
let comment = document.querySelector('.comment');
comment.innerText = commentscore;
let share = document.querySelector('.share');
share.innerText = sharescore;
let view = document.querySelector('.view');
view.innerText = viewscore;



if (likescore >= 99999) {
    like.innerText = likescore.toString().slice(0, 2) + "k";
    comment.innerText = commentscore.toString().slice(0, 2) + "k";
    share.innerText = sharescore.toString().slice(0, 2) + "k";
    view.innerText = viewscore.toString().slice(0, 2) + "k";
} else { like.innerText = likescore };

//custom like scores
let customlikescore = Math.floor(Math.random()*1000000) +100;
// custom likes
let customLikes = document.querySelector('.custom-like');
    customLikes.innerText = customlikescore;



    // Handle like button functionality
function likeColor() {
    const likeIcon = document.getElementById('like-icon');
    likeIcon.classList.toggle('text-primary');
}


  const input = document.getElementById('photoInput');
  const preview = document.getElementById('previewImage');

  input.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        preview.src = e.target.result;
      }

      reader.readAsDataURL(file); // Convert to base64
    }
  });