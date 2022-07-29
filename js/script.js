
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        780:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

function loading(){
    document.getElementById('preloader').style.display ='none';
}
function openMenu(){
    document.querySelector('.mobile-menu').style.display = 'block';
}
function closeMenu(){
    document.querySelector('.mobile-menu').style.display = 'none';
}

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})

var countDownData = new Date("July 31, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownData - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance<0){
        clearInterval(x)
        document.getElementById("days").innerHTML = 00;
        document.getElementById("hours").innerHTML = 00;
        document.getElementById("minutes").innerHTML = 00;
        document.getElementById("seconds").innerHTML = 00;
    }
},1000);

var btn1 = document.querySelectorAll('.product-meta a:first-child');

btn1.forEach(function(item){
    item.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.quickView-modal').style.display = 'block';
    });
});
function closeModal(){
    document.querySelector('.quickView-modal').style.display = 'none';
}

