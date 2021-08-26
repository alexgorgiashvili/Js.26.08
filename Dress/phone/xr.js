$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    
  });

 
  let price = $(".capdiv").attr("data-price")
  let redphone = $(".circlediv").eq(4).attr("data-img")
  

  $(".circlediv").on("click", function(){
    let img = $(this).attr("data-img")
    let mimg = $(".phimg").attr("src")  
    
    
    $(".phimg").attr("src",img)
    $(".circlediv").removeClass("pricebor")
    $(this).addClass("pricebor") 
    if(price == "$749.00" && redphone == mimg ){
        
      $(".pricep").children().eq(0).addClass("line ")
      $(".hiddenspan").removeClass("d-none")
      
  }else{
    $(".pricep").children().eq(0).removeClass("line ")
    $(".hiddenspan").addClass("d-none")
  } 
  
  console.log( redphone == mimg )


  })
 

  $(".capdiv").on("click", function(){
    let price = $(this).attr("data-price")
    let mimg = $(".phimg").attr("src")
    
    $(".pricep").children().eq(0).text(price)
    $(".capdiv").removeClass("pricebor")
    $(this).addClass("pricebor")
    if(price == "$799.00"){
        $(".clrdiv:last-child").addClass("disable")
        $(".bi-x-lg").removeClass("d-none")

    }else{
        $(".clrdiv:last-child").removeClass("disable")
        $(".bi-x-lg").addClass("d-none")
    }
    if( redphone == mimg && price == "$749.00"){
        
        $(".pricep").children().eq(0).addClass("line ")
        $(".hiddenspan").removeClass("d-none")
        
    }else{
      $(".pricep").children().eq(0).removeClass("line ")
      $(".hiddenspan").addClass("d-none")
    }       
  
  })
