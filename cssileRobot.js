
$(".flash").click(function() {
    $(".brain").toggleClass('laser');
});


$(".color").click(function() {

    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);


    var randomRGBA = 'rgba('+red+', '+green+', '+blue+',1)';


    $("body").css("background", randomRGBA);

   
    // alert(randomRGBA);
});

$(".moves").click(function() {
    $("img").toggle();
});