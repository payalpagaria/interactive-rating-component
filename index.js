let fired_button=0;
$(".submit").on("click",function(){
    $("img").attr('src','images/illustration-thank-you.svg').addClass("img2");
    $("h4").text(`You selected ${fired_button} out of 5`).addClass("child2");
    $("h1").text("Thank you!").addClass("h1style");
    let txt="We appreciate you taking the time to give a rating."+"\n"+" If you ever need more support, don’t hesitate to get in touch!"
    $("p").text(txt).addClass("p1style");
    $("button").hide();

})
$(".score").click(function() {
    fired_button = $(this).val();
    
});
