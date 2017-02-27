

nummerprint();
function nummerprint() {

  var talet = prompt("skriv ett tal");

  talet = parseInt(talet);//gör om till tal


  while (isNaN(talet)){ //Kolla om det är ett tal

      talet = prompt("skriv ett tal");
  }

  $("#talet").html(talet); //sätt dit talet i paragraf
  $(".fade").fadeIn();


}


$(".fade").click(function (){ //klicka på texten för att ta bort den
    $(".fade").fadeOut();
});
