
// import txtDescription from "./text.json" assert { type: "json" };
// const txtDescription = await import("./text.json", { assert: { type: "json" } })
// import txtDescription from "./text.json";

window.onload = async function () {
  
    const response = await fetch("./text.json");
  
    const txtDescription = await response.json();
    console.log(txtDescription);


let container = document.querySelector('.container');
let row = document.querySelector('.row');

const currentUrl = window.location.href;
var index
var slideIndex
try {
    index =currentUrl.split(["#"])
    slideIndex = Number(index[index.length - 1]);
    console.log("slideIndex " + slideIndex)

    if (slideIndex.length > 3) {
        // console.log("Not INDEX")
        slideIndex = 1

    }
    else {
        console.log("INDEX !!!!")
        slideIndex = 1
    }

    // alert(index)


} catch (error) {
    console.log("ERROR")
    slideIndex = 1
}

let beat = new Audio('img/audio/mus.mp3');
beat.loop = true;
// beat.muted = true;

// var resp = beat.play();

// if (resp!== undefined) {
//     resp.then(_ => {
//         // autoplay starts!
//         console.log("play")
//         beat.play()
//     }).catch(error => {
//        //show error
//        console.log("error")

//     });
// }
// beat.play()
// // beat.pause()

const play_pause = document.getElementById("btn_img");

play_pause.addEventListener("click", () => {
 
    console.log("click")
    // console.log(beat.play)

    if(beat.paused) {
        play_pause.src = "./img/play.png"
        beat.play()
        
    }
    // if(beat.pause) {
    //     play_pause.src = "./img/play.png"
    //     beat.play()
    // }
    else {
        play_pause.src = "./img/pause.png"
        beat.pause()
    }
    play_pause.style.scale="1"

    

});





for (let i = 0; i < txtDescription.length; i++) {

    let div = document.createElement('div');
    div.classList.add("mySlides");

    let img = document.createElement('img');
    img.loading = "lazy"
    img.src = txtDescription[i].img;
    
    img.style.width = "100%";

    let txt = document.createElement('div');
    txt.classList.add('captionslides')
    txt.innerText = txtDescription[i].txt


    let video = document.createElement('video')
    video.className = "video"
    video.src = txtDescription[i].video;
    video.autoplay = "true";
    video.muted = "true"
    video.loop = "true";


    // function sleep(ms) {
    //     var start = Date.now(), expire = start + ms;
    //     while (Date.now() < expire) {}
    //     return;
    //   }
    //   var ms_delay = 1000;
    //   console.log('Wait ' + ms_delay);
    //   sleep(ms_delay);
   
    video.play()
    

    
    

    ///<img class="btn_img" src="./img/fsbtn.png" alt="" width="50" >

    // let img_fs = document.createElement('img');
    // img_fs.className = "btn_img"
    // img_fs.src = "./img/fsbtn.png";
    // img_fs.style.width = "50px";


    const fullScreenWindow = document.getElementById("fullscreen-window");
    const fullScreenImage = document.getElementById("fullscreen-window-image");


    img.addEventListener("click", () => {
        
        fullScreenWindow.style.display = "block"
    
        fullScreenImage.src = img.getAttribute('src')
        console.log(img.getAttribute('src'))

        
     });

     fullScreenWindow.addEventListener("click", () => {
        
        fullScreenWindow.style.display = "none"
        
     });

    
    //  div.appendChild(img_fs)
    div.appendChild(video)
    // div.appendChild(img)
    div.appendChild(txt)

    container.appendChild(div);


    let column = document.createElement('div');
    column.classList.add('column');



    let img_prev = document.createElement('img');

    img_prev.loading="lazy"
    img_prev.className = "demo cursor"
    img_prev.src = txtDescription[i].img;
    img_prev.style.width = "100%"
    
    console.log('i: '+i )
    // img_prev.setAttribute("onClick","currentSlide("+(i+1)+")")
    img_prev.alt = txtDescription[i].alt

    
    img_prev.addEventListener("click", () => {
        
        currentSlide(i+1)
        
     });

    column.appendChild(img_prev)
    row.appendChild(column)

    


}

// alert(slideIndex)

showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }


currentSlide(slideIndex)

function currentSlide(n) {
    console.log("curent slide " + n)
    showSlides(slideIndex = n);
}


const prev_ = document.getElementById("prev_")
prev_.addEventListener("click", () => {
    plusSlides(-1)
})

const next_ = document.getElementById("next_")
next_.addEventListener("click", () => {
    plusSlides(1)
})



function plusSlides(n) {
    // alert(n + "  slideIndex:" + slideIndex + " next:" + (n+=slideIndex))
    showSlides(slideIndex += n);
}



function showSlides(n) {
    // alert("showSlides")
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // alert(slides.length)
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


}

// let container = document.querySelector('.container');
// let row = document.querySelector('.row');

// const currentUrl = window.location.href;
// var index
// var slideIndex
// try {
//     index =currentUrl.split(["#"])
//     slideIndex = Number(index[index.length - 1]);
//     console.log("slideIndex " + slideIndex)

//     if (slideIndex.length > 3) {
//         // console.log("Not INDEX")
//         slideIndex = 1

//     }
//     else {
//         console.log("INDEX !!!!")
//         slideIndex = 1
//     }

//     // alert(index)


// } catch (error) {
//     console.log("ERROR")
//     slideIndex = 1
// }

// let beat = new Audio('img/audio/mus.mp3');
// beat.loop = true;
// // beat.muted = true;

// // var resp = beat.play();

// // if (resp!== undefined) {
// //     resp.then(_ => {
// //         // autoplay starts!
// //         console.log("play")
// //         beat.play()
// //     }).catch(error => {
// //        //show error
// //        console.log("error")

// //     });
// // }
// // beat.play()
// // // beat.pause()

// const play_pause = document.getElementById("btn_img");

// play_pause.addEventListener("click", () => {
 
//     console.log("click")
//     // console.log(beat.play)

//     if(beat.paused) {
//         play_pause.src = "./img/play.png"
//         beat.play()
        
//     }
//     // if(beat.pause) {
//     //     play_pause.src = "./img/play.png"
//     //     beat.play()
//     // }
//     else {
//         play_pause.src = "./img/pause.png"
//         beat.pause()
//     }
//     play_pause.style.scale="1"

    

// });





// for (let i = 0; i < txtDescription.length; i++) {

//     let div = document.createElement('div');
//     div.classList.add("mySlides");

//     let img = document.createElement('img');
//     img.loading = "lazy"
//     img.src = txtDescription[i].img;
    
//     img.style.width = "100%";

//     let txt = document.createElement('div');
//     txt.classList.add('captionslides')
//     txt.innerText = txtDescription[i].txt


//     let video = document.createElement('video')
//     video.className = "video"
//     video.src = txtDescription[i].video;
//     video.autoplay = "true";
//     video.muted = "true"
//     video.loop = "true";


//     // function sleep(ms) {
//     //     var start = Date.now(), expire = start + ms;
//     //     while (Date.now() < expire) {}
//     //     return;
//     //   }
//     //   var ms_delay = 1000;
//     //   console.log('Wait ' + ms_delay);
//     //   sleep(ms_delay);
   
//     video.play()
    

    
    

//     ///<img class="btn_img" src="./img/fsbtn.png" alt="" width="50" >

//     // let img_fs = document.createElement('img');
//     // img_fs.className = "btn_img"
//     // img_fs.src = "./img/fsbtn.png";
//     // img_fs.style.width = "50px";


//     const fullScreenWindow = document.getElementById("fullscreen-window");
//     const fullScreenImage = document.getElementById("fullscreen-window-image");


//     img.addEventListener("click", () => {
        
//         fullScreenWindow.style.display = "block"
    
//         fullScreenImage.src = img.getAttribute('src')
//         console.log(img.getAttribute('src'))

        
//      });

//      fullScreenWindow.addEventListener("click", () => {
        
//         fullScreenWindow.style.display = "none"
        
//      });

    
//     //  div.appendChild(img_fs)
//     div.appendChild(video)
//     // div.appendChild(img)
//     div.appendChild(txt)

//     container.appendChild(div);


//     let column = document.createElement('div');
//     column.classList.add('column');



//     let img_prev = document.createElement('img');

//     img_prev.loading="lazy"
//     img_prev.className = "demo cursor"
//     img_prev.src = txtDescription[i].img;
//     img_prev.style.width = "100%"
    
//     console.log('i: '+i )
//     // img_prev.setAttribute("onClick","currentSlide("+(i+1)+")")
//     img_prev.alt = txtDescription[i].alt

    
//     img_prev.addEventListener("click", () => {
        
//         currentSlide(i+1)
        
//      });

//     column.appendChild(img_prev)
//     row.appendChild(column)

    


// }

// // alert(slideIndex)

// showSlides(slideIndex);

// // function plusSlides(n) {
// //     showSlides(slideIndex += n);
// // }

// // function currentSlide(n) {
// //     showSlides(slideIndex = n);
// // }


// currentSlide(slideIndex)

// function currentSlide(n) {
//     console.log("curent slide " + n)
//     showSlides(slideIndex = n);
// }


// const prev_ = document.getElementById("prev_")
// prev_.addEventListener("click", () => {
//     plusSlides(-1)
// })

// const next_ = document.getElementById("next_")
// next_.addEventListener("click", () => {
//     plusSlides(1)
// })



// function plusSlides(n) {
//     // alert(n + "  slideIndex:" + slideIndex + " next:" + (n+=slideIndex))
//     showSlides(slideIndex += n);
// }



// function showSlides(n) {
//     // alert("showSlides")
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     // alert(slides.length)
//     var dots = document.getElementsByClassName("demo");
//     var captionText = document.getElementById("caption");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     captionText.innerHTML = dots[slideIndex - 1].alt;
// }