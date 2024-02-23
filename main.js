let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains = document.getElementById('mountains');
let smaher = document.querySelector('.smaher');
window.onscroll = function () {
    let value = scrollY;
    // console.log(value)
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 1.2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    smaher.style.fontSize = value + 'px';
    if(scrollY >= 60.5){
        smaher.style.fontSize = 60.5 + 'px';
        smaher.style.position = 'fixed';
        if(scrollY >= 478){
            smaher.style.display = 'none';
        }else{
            smaher.style.display = 'block';
        }
        if(scrollY >= 90){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
        }
    }
    

    
}