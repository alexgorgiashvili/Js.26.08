
$(".clrdivs").on("click", function(){
    let atrib = $(this).attr("data-img")
    let txt = $(this).attr("data-text")
    let par = $(this).parent()

    $("img").attr("src",atrib); 
    $(".changetext1").text(txt)
    $(".fcsdiv").removeClass("addcls")
    par.addClass("addcls")
})