$(document).ready( ()=>{
   // window.location.replace("http://stackoverflow.com");
    console.log("readyyyy");
    $('.patch-btn').click(function(){

       // window.location.href = "library/patch/"+this.id;

        window.location.href = "patch.html";
    });

    $('.offer-btn').click(function(){
        //window.location.href = "library/offer/"+this.id;
        window.location.href = "offer.html";
     });
     

} );