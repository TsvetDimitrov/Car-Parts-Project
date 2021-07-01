
//Hide and Show navbar when scrolling:
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".topnav").style.top = "0";
  } else {
    document.querySelector(".topnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


//sidenav eventlistener for dropdown menu

const categories = document.querySelector('.categories');
categories.addEventListener('click', (e) => {
    console.log(e.target);
        if(e.target.querySelector(".dropdown").style.display == ''){
            e.target.querySelector(".dropdown").style.display = 'block';
        }else if(e.target.querySelector(".dropdown").style.display == 'block'){
            e.target.querySelector(".dropdown").style.display = '';
        }
});
