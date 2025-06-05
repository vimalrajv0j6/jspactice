var productcontainer = document.getElementById("product");
var productlist = productcontainer.querySelectorAll("div");
var search = document.getElementById("search");

search.addEventListener("keyup" ,function(event){
    
     var enterdText = event.target.value.toUpperCase();

      for(var i=0; i<productlist.length; i++)
      {
        if(productlist[i].textContent.toUpperCase().indexOf(enterdText)<0)
        {
            productlist[i].style.display="none";
        }
        else{
            productlist[i].style.display="block";
        }
      }
})