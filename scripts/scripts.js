$(document).ready(function(){
    var images = ("#storefront image")
  var currentImageIndex = 0;
  var autoplay = 4000;
  var sliderwidth = 500;
  var slides = images.length;
  $("#storefront image").eq(currentImageIndex).show();

  $("image").click(function(){

    $("#storefront image").eq(currentImageIndex).fadeOut();

    currentImageIndex = (currentImageIndex + 1) % $("#storefront image").length;

    $("#storefront image").eq(currentImageIndex).fadeIn();

    function nextimage(autoplay){
if(currentImageIndex<slides+1){
(currentImageIndex + 1) % $("#storefront image").length;
$("#storefront").animate({left:-sliderwidth*(currentImageIndex)},{duration:800,});
}
else{
currentImageIndex = 0;
$("#storefront").animate({left:0},{duration:800,})
}
 
    if (autoplay) { setTimeout(function() { nextimage(true); }, 4000); }
};
    
    setTimeout(function() { nextimage(true); }, 4000);
});


  var currentImageIndex = 0;
  $("#slider img").eq(currentImageIndex).show();
  $("#slider").click(function() {
    $("#slider img").eq(currentImageIndex).fadeOut();
  
    currentImageIndex = (currentImageIndex + 1) % $("#slider img").length;
    $("#slider img").eq(currentImageIndex).fadeIn();
  });

  var currentImageIndex = 0;
  $("#slider1 img").eq(currentImageIndex).show();
  $("#slider1").click(function() {

    $("#slider1 img").eq(currentImageIndex).fadeOut();
  
    currentImageIndex = (currentImageIndex + 1) % $("#slider1 img").length;

    $("#slider1 img").eq(currentImageIndex).fadeIn();
  });


  var currentImageIndex = 0;
  $("#slider2 img").eq(currentImageIndex).show();
  $("#slider2").click(function() {
    // Hide the current image
    $("#slider2 img").eq(currentImageIndex).fadeOut();
    
    currentImageIndex = (currentImageIndex + 1) % $("#slider2 img").length;
    // Show the next image
    $("#slider2 img").eq(currentImageIndex).fadeIn();
  });

  
  var currentImageIndex = 0;
  $("#slider3 img").eq(currentImageIndex).show();
  $("#slider3").click(function() {
    // Hide the current image
    $("#slider3 img").eq(currentImageIndex).fadeOut();
    
    currentImageIndex = (currentImageIndex + 1) % $("#slider3 img").length;
    // Show the next image
    $("#slider3 img").eq(currentImageIndex).fadeIn();
  });


 var currentImageIndex = 0;
 $("#slider4 img").eq(currentImageIndex).show();
$("#slider4").click(function() {
 $("#slider4 img").eq(currentImageIndex).fadeOut();
currentImageIndex = (currentImageIndex + 1) % $("#slider4 img").length;
 $("#slider4 img").eq(currentImageIndex).fadeIn();
});

  
 var currentImageIndex = 0;
 $("#slider4 img").eq(currentImageIndex).show();
$("#slider4").click(function() {
 $("#slider4 img").eq(currentImageIndex).fadeOut();
currentImageIndex = (currentImageIndex + 1) % $("#slider4 img").length;
 $("#slider4 img").eq(currentImageIndex).fadeIn();
});


 var currentImageIndex = 0;
 $("#slider4 img").eq(currentImageIndex).show();
$("#slider4").click(function() {
 $("#slider4 img").eq(currentImageIndex).fadeOut();
currentImageIndex = (currentImageIndex + 1) % $("#slider4 img").length;
 $("#slider4 img").eq(currentImageIndex).fadeIn();
});

 var currentImageIndex = 0;
 $("#slider4 img").eq(currentImageIndex).show();
$("#slider4").click(function() {
 $("#slider4 img").eq(currentImageIndex).fadeOut();
currentImageIndex = (currentImageIndex + 1) % $("#slider4 img").length;
 $("#slider4 img").eq(currentImageIndex).fadeIn();
});

   
 var currentImageIndex = 0;
 $("#slider4 img").eq(currentImageIndex).show();
$("#slider4").click(function() {
 $("#slider4 img").eq(currentImageIndex).fadeOut();
currentImageIndex = (currentImageIndex + 1) % $("#slider4 img").length;
 $("#slider4 img").eq(currentImageIndex).fadeIn();
});

    
 var currentImageIndex = 0;
 $("#slider4 img").eq(currentImageIndex).show();
$("#slider4").click(function() {
 $("#slider4 img").eq(currentImageIndex).fadeOut();
currentImageIndex = (currentImageIndex + 1) % $("#slider4 img").length;
 $("#slider4 img").eq(currentImageIndex).fadeIn();
});

   
 var currentImageIndex = 0;
 $("#slider4 img").eq(currentImageIndex).show();
$("#slider4").click(function() {
 $("#slider4 img").eq(currentImageIndex).fadeOut();
currentImageIndex = (currentImageIndex + 1) % $("#slider4 img").length;
 $("#slider4 img").eq(currentImageIndex).fadeIn();
});



 var currentImageIndex = 0;
 $("#slider4 img").eq(currentImageIndex).show();
$("#slider4").click(function() {
 $("#slider4 img").eq(currentImageIndex).fadeOut();
currentImageIndex = (currentImageIndex + 1) % $("#slider4 img").length;
 $("#slider4 img").eq(currentImageIndex).fadeIn();
});


 var currentImageIndex = 0;
 $("#slider4 img").eq(currentImageIndex).show();
$("#slider4").click(function() {
 $("#slider4 img").eq(currentImageIndex).fadeOut();
currentImageIndex = (currentImageIndex + 1) % $("#slider4 img").length;
 $("#slider4 img").eq(currentImageIndex).fadeIn();
});



    var min = new Date().getSeconds(); 
  
    if (min % 2 == 0) {
        $("#slider").insertBefore("#slider4");
        $("#slider1").insertBefore("#slider2");
    } else {
        $("#slider4").insertAfter("#slider1");
    }

 
// });


$('#imglist').each(function(){

  
      var $div_parent = $(this);

  
      var $divsArr = $div_parent.children('#slider, #slider1, #slider2,#slider3,#slider4');

    
      $divsArr.sort(function(a,b){
           
            var temp = parseInt( Math.random()*10 );

    
            var isOddOrEven = temp%2;

           
            var isPosOrNeg = temp>5 ? 1 : -1;

          
            return( isOddOrEven*isPosOrNeg );
      })

      .appendTo($div_parent);            
});


  $(window).scroll(function(){
    if($(window).scrollTop() > 700 && $("nav").is(":hidden")){
        $("nav").slideDown("1000");
        $("#basket").fadeIn();
      } else if ($(window).scrollTop() <= 1024){
  $("nav").fadeOut(1000);
  }
  });



   $('li').click(function(){
$(this).prependTo($(this).parent());
  $("nav").fadeOut(2000);
});



$(window).resize(function(){
  if($(window).width() < 1025){
       $('#storefront')[0].setAttribute('viewBox', '0 0 1024 768');
        $('#guns')[0].setAttribute('y', '440');
         $('#guns')[0].setAttribute('x', '510');
          $('#guns')[0].setAttribute('height', '300');
           $('#guns')[0].setAttribute('width', '400');
                   $('#tspan36345')[0].setAttribute('y', '386');
                    $('#tspan36345')[0].setAttribute('x', '60');
                     $('#tspangun')[0].setAttribute('x', '160');
                      $('#tspan36')[0].setAttribute('y', '386');
                       $('#tspan36')[0].setAttribute('x', '270');
                        $('#tspanjoke')[0].setAttribute('x', '410');
                         $('#tspancam')[0].setAttribute('x', '520');
                          $('#tspancam')[0].setAttribute('y', '386');
                           $('#tspankits')[0].setAttribute('x', '780');
                            $('#tspankits')[0].setAttribute('y', '386');
                             $('#tspanodd')[0].setAttribute('x', '640');
                       $('#winds')[0].setAttribute('y', '440');
                        $('#winds')[0].setAttribute('x', '510');
                         $('#winds')[0].setAttribute('height', '300');
                          $('#winds')[0].setAttribute('width', '400');
}else{//($(window).width() > 1024)
   $('#storefront')[0].setAttribute('viewBox', '0 0 1922.4458 1060');
    $('#guns')[0].setAttribute('y', '480');
     $('#guns')[0].setAttribute('x', '930');
      $('#guns')[0].setAttribute('height', '463');
       $('#guns')[0].setAttribute('width', '700');
                $('#tspan36345')[0].setAttribute('y', '490');
                 $('#tspan36345')[0].setAttribute('x', '140');
                  $('#tspangun')[0].setAttribute('x', '310');
                   $('#tspan36')[0].setAttribute('y', '490');
                    $('#tspan36')[0].setAttribute('x', '490');
                     $('#tspanjoke')[0].setAttribute('x', '740');
                      $('#tspancam')[0].setAttribute('x', '930');
                       $('#tspancam')[0].setAttribute('y', '490');
                        $('#tspankits')[0].setAttribute('x', '1180');
                         $('#tspankits')[0].setAttribute('y', '490');
                          $('#tspanodd')[0].setAttribute('x', '1360');
     
            $('#winds')[0].setAttribute('y', '530');
             $('#winds')[0].setAttribute('x', '930');
              $('#winds')[0].setAttribute('height', '363');
               $('#winds')[0].setAttribute('width', '700');
}
});


/********The following is needed to make the lightbox pop-up 
with corresponding pictures and information **********/




  var lastToyClicked = "";

  $(".pictures img").click(function(){
    $("#lightbox, #pic1").show(500);
    $(".description, .price, .blurb").show().velocity({scale: 1.5}, {duration: 500, loop:3});

  var description = $(this).attr("data-description");
     $("#pic1 .description").html(description).css({"color":"red", "font-size": "50px"});
   
   var price = $(this).attr("data-price");
    $("#pic1 .price").html(price).css({"color":"black", "font-size": "30px"});

    var blurb = $(this).attr("data-blurb");
    $("#pic1 .blurb").html(blurb).css({"color":"black", "font-size": "30px", "width": "10%"});

     var img = $(this).attr("src");
     $("#pic1 img").attr("src", img.substring(0, img.length-6)+"lg.jpg");

     lastToyClicked = img;
  });


   $("#lightbox").click(function(){
    $("#lightbox, .description, .price, .blurb").fadeOut(500);
   });

  $("#shoppingBtn").on("click", function(){
    $(".pictures img[src='" + lastToyClicked + "']").addClass("shoppingList");
  });


  $("#basket").click(function(){
    var shoppingListItems = document.getElementsByClassName("shoppingList");
    var listLength = shoppingListItems.length;
    alert("You have " + listLength + " items in your basket");
  });


  // if(shoppingListItems>0){
  //  alert("Your basket is waiting!");
  // }else{
  //  alert("Keep browsing");
  // }


  var list = $(".pictures img").toArray();
  var elemlength = list.length;
  var randomnum = Math.floor(Math.random()*elemlength);
  var randomitem = list[randomnum];
   console.log(randomitem)
  $(randomitem).wrap("<a href = 'jacks.html'></a>");




  var list = $("#imglist div").toArray();

  var numGoodClicks = 0;
  var numBadClicks = 0;
   
for (i = 0; i < list.length; i++);

console.log((list)[0]);
$(list).on( "click", function() {
  if($(this).hasClass('good'))
  {
    numGoodClicks++;
  }
  else
  {
    numBadClicks++;
  }

  if(numBadClicks === 2)
  {
    $( "#jack2" ).text( "You lose." );
    $( "#jack2" ).fadeOut( 8000, "linear");
    $( "#jack3" ).fadeIn( 5000, "linear");
    
  }

  if(numGoodClicks === 3)
  {
    $( "#jack2" ).text( "You win." );
    $( "#jack2" ).animate({opacity:0},200,"linear",function(){
  $(this).animate({opacity:1},200);
});
  }
    
  if(numGoodClicks === 2 && numBadClicks === 1)
  {
    $( "#jack2" ).text( " 10% Discount" );

  }
  $("#jacky").css("overflow", "hidden");

});
});













