/*1.Crate a HTML page holding a "Like" button that changes to "Unlike" 
when clicked, then again to "Like", etc.*/
function likeUnlike() {
    var btn = document.getElementById('like');
    var btnValue = btn.value;
    var likeUrl = 'url(images/loveJS.jpg)';
    var unLikeUrl = 'url(images/hateJS1.jpg)';
    
    if (btnValue === 'Like') {
        btn.value = 'Unlike';
        document.body.style.backgroundImage=likeUrl;
    } else {
        btn.value = 'Like';
        document.body.style.backgroundImage = unLikeUrl;
    }

}