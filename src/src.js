
//Hide and Show navbar when scrolling:
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".topnav").style.top = "0";
  } else {
    document.querySelector(".topnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


//sidenav eventlistener for dropdown menu

// const categories = document.querySelector('.categories');
// //console.log(categories);
// categories.addEventListener('mouseover', (e) => {

//   if (e.target.querySelector(".dropdown").style.display == '') {
//     console.log('here');
//     e.target.querySelector(".dropdown").style.display = 'block';
//   }
// });

// categories.addEventListener('mouseleave', (e) => {
 
//     console.log('there');
//     e.target.querySelector(".dropdown").style.display = '';
  
// });
