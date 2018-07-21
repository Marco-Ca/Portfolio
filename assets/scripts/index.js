var roles = ['Front-End Developer', 'Back-End Developer', 'Passionate Coder'];

setInterval(myTimer, 2000);

function myTimer() {
    if ($('#roles').html() == roles[0]) {
        $('#roles').html(roles[1]);
    } else if ($('#roles').html() == roles[1]){
        $('#roles').html(roles[2]);
    } else {
        $('#roles').html(roles[0]);
    }
}

$(window).on('scroll', function () {
    if ( $(window).scrollTop() >= $(window).height() - 20) {
        $('.nav-container').addClass("scrolled");

    } else {
        $('.nav-container').removeClass("scrolled");

    }
});
$(window).on('scroll', function () {
    if ( $(window).scrollTop() >= $(window).height() - 900) {
        $('.snowflake').css("display", "none");
    } else {
        $('.snowflake').css("display", "block");
    }
});

var list = document.querySelectorAll(".item a");

for (var i = 0; i < list.length; i++) {
    var url = list[i].children[0].getAttribute("src");
    list[i].style.backgroundImage="url('" + url + "')";
}

$(window).on('mouseover', ()=> {
    $('#show-skill').html('');
});

$("#home").on('click', (event) => {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(".first-page").offset().top},
    'slow');
});

$("#about").on('click', (event) => {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(".second-page").offset().top},
    'slow');
});

$("#skills").on('click', (event) => {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(".third-page").offset().top},
    'slow');
});

$("#projects").on('click', (event) => {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(".fourth-page").offset().top},
    'slow');
});

$("#contact").on('click', (event) => {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(".fifth-page").offset().top},
    'slow');
});

function openModal1() {
    document.getElementById('myModal').style.display = "block";
    $('.modal-content').css('width', '90%');
    $('#image-1').attr('src', './assets/images/connect4/connect4a.gif');
    $('.demo-1').attr({
        'alt': 'Play the classic version',
        'src': './assets/images/connect4/connect4a.gif'
    });
    $('#image-2').attr('src', './assets/images/connect4/connect4b.gif');
    $('.demo-2').attr({
        'alt': 'Or click the avengers logo and enter "Avengers Initiative"',
        'src': './assets/images/connect4/connect4b.gif'
    });
    $('#image-3').attr('src', './assets/images/connect4/connect4c.gif');
    $('.demo-3').attr({
        'alt': 'Enjoy the game with sound and some effects!',
        'src': './assets/images/connect4/connect4c.gif'
    });
    $('body').css('overflow', 'hidden');
}

function openModal2() {
    document.getElementById('myModal').style.display = "block";
    $('.modal-content').css('width', '90%');
    $('#image-1').attr('src', './assets/images/imageboard/imageboard1.gif');
    $('.demo-1').attr({
        'alt': 'Add your own image/photo',
        'src': './assets/images/imageboard/imageboard1.gif'
    });
    $('#image-2').attr('src', './assets/images/imageboard/imageboard2.gif');
    $('.demo-2').attr({
        'alt': 'You can also add comments',
        'src': './assets/images/imageboard/imageboard2.gif'
    });
    $('#image-3').attr('src', './assets/images/imageboard/imageboard3.gif');
    $('.demo-3').attr({
        'alt': 'Load more images. Initial limit is 10',
        'src': './assets/images/imageboard/imageboard3.gif'
    });
    $('body').css('overflow', 'hidden');
}

function openModal3() {
    document.getElementById('myModal').style.display = "block";
    $('.modal-content').css('width', '90%');
    $('#image-1').attr('src', './assets/images/petition/petition1.gif');
    $('.demo-1').attr({
        'alt': 'Register or Log in',
        'src': './assets/images/petition/petition1.gif'
    });
    $('#image-2').attr('src', './assets/images/petition/petition2.gif');
    $('.demo-2').attr({
        'alt': 'Sign the petition to stop the use of plastic and get a certificate',
        'src': './assets/images/petition/petition2.gif'
    });
    $('#image-3').attr('src', './assets/images/petition/petition3.gif');
    $('.demo-3').attr({
        'alt': 'You can always edit your profile and signature',
        'src': './assets/images/petition/petition3.gif'
    });
    $('body').css('overflow', 'hidden');
}

function openModal4() {
    document.getElementById('myModal').style.display = "block";
    $('.modal-content').css('width', '90%');
    $('#image-1').attr('src', './assets/images/social/social1.gif');
    $('.demo-1').attr({
        'alt': 'After registering/logging in, you can add/edit bio',
        'src': './assets/images/social/social1.gif'
    });
    $('#image-2').attr('src', './assets/images/social/social2.gif');
    $('.demo-2').attr({
        'alt': 'You can see who are online, add some friends or unfriend people',
        'src': './assets/images/social/social2.gif'
    });
    $('#image-3').attr('src', './assets/images/social/social3.gif');
    $('.demo-3').attr({
        'alt': 'Add your diary which is realtime and other users can see it',
        'src': './assets/images/social/social3.gif'
    });
    $('body').css('overflow', 'hidden');
}

function openModal5() {
    document.getElementById('myModal').style.display = "block";
    $('.modal-content').css('width', '30%');
    $('#image-1').attr('src', './assets/images/imprint/imprint1.gif');
    $('.demo-1').attr({
        'alt': 'Sign up or Sign in',
        'src': './assets/images/imprint/imprint1.gif'
    });
    $('#image-2').attr('src', './assets/images/imprint/imprint2.gif');
    $('.demo-2').attr({
        'alt': 'Upload a picture, locate yourself, share the place name',
        'src': './assets/images/imprint/imprint2.gif'
    });
    $('#image-3').attr('src', './assets/images/imprint/imprint3.gif');
    $('.demo-3').attr({
        'alt': 'Check the Im-Print to see your uploaded photo',
        'src': './assets/images/imprint/imprint3.gif'
    });
    $('body').css('overflow', 'hidden');
}

// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
    $('body').css('overflow', 'auto');
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

function myFunction() {
    console.log('clicked');
    var x = document.getElementById("navigations");
    if (x.className === "navigations") {
        $('.nav-container').css('height', '100px');
        x.className += " responsive";
    } else {
        x.className = "navigations";
        $('.nav-container').css('height', '35px');
    }
}



$('.item:eq(0)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('HTML 5');
});

$('.item:eq(1)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('CSS 3');
});

$('.item:eq(2)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('Javascript');
});

$('.item:eq(3)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('jQuery');
});

$('.item:eq(4)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('MongoDB');
});

$('.item:eq(5)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('PostgreSQL');
});

$('.item:eq(6)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('SocketIO');
});

$('.item:eq(7)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('ReactJS');
});

$('.item:eq(8)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('Redux');
});

$('.item:eq(9)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('VueJS');
});

$('.item:eq(10)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('Amazon s3');
});

$('.item:eq(11)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('Firebase');
});

$('.item:eq(12)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('Git (version control)');
});

$('.item:eq(13)').on('mouseover', function(e) {
    e.stopPropagation();
    $('#show-skill').html('Jasmine (Unit Testing)');
});


function snowflake() {
    $('.snowflake:eq(1)').css("color", randomColor()).html("for (var i)");
    $('.snowflake:eq(2)').css("color", randomColor()).html("const PI");
    $('.snowflake:eq(3)').css("color", randomColor()).html("let x = y");
    $('.snowflake:eq(4)').css("color", randomColor()).html("mapStateToProps");
    $('.snowflake:eq(5)').css("color", randomColor()).html("arr.forEach()");
    $('.snowflake:eq(6)').css("color", randomColor()).html("res.JSON");
    $('.snowflake:eq(7)').css("color", randomColor()).html("statusCode");
    $('.snowflake:eq(8)').css("color", randomColor()).html("Error");
    $('.snowflake:eq(9)').css("color", randomColor()).html("async");
    $('.snowflake:eq(10)').css("color", randomColor()).html("await");
    $('.snowflake:eq(11)').css("color", randomColor()).html("then()");
    $('.snowflake:eq(12)').css("color", randomColor()).html("catch()");
    $('.snowflake:eq(13)').css("color", randomColor()).html("API");
    $('.snowflake:eq(14)').css("color", randomColor()).html("toString()");
    $('.snowflake:eq(15)').css("color", randomColor()).html("console.log()");
    $('.snowflake:eq(16)').css("color", randomColor()).html("alert()");
    $('.snowflake:eq(17)').css("color", randomColor()).html("Funky Chicken");
    $('.snowflake:eq(18)').css("color", randomColor()).html("Component");
    $('.snowflake:eq(19)').css("color", randomColor()).html("map()");
    $('.snowflake:eq(20)').css("color", randomColor()).html("filter()");

}

$(document).ready(function() {
    $(this).scrollTop(0);
    snowflake();
    // myFunction();

});


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;
}
