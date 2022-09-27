// appear setting content 

document.querySelector(".toggle-setting .fa-cog").onclick= function(){
    this.classList.toggle("fa-spin");

document.querySelector(".setting-box").classList.toggle("open");    
}


//switch colors
const colorLi = document.querySelectorAll(".colors-list li");

// loop on all list items
colorLi.forEach(li => {
    
    // check on every list items 
    li.addEventListener("click" , (e)=> {


     // set colors on root
     
     document.documentElement.style.setProperty('--main--color' , e.target.dataset.color);
    })
})

//select landing page element

var element = document.querySelector(".landing-page");

// get an array of images 

var imgs = ["1.jpg" , "2.jpg" ,"3.jpg","4.jpg","5.jpg" ];

// change background imagge url 







setInterval(() => {
    var random = Math.floor(Math.random() * imgs.length ) ;
    element.style.backgroundImage = 'url("images/'+imgs[random]+'")';
}, 10000)