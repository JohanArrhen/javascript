
var talet = prompt("skriv ett tal");

talet = parseInt(talet);//gör om till tal
console.log(talet);

while (isNaN(talet)){ //Kolla om det är ett tal
    console.log("not a number");
    talet = prompt("skriv ett tal");
}

$("#talet").html(talet); //sätt dit talet i paragraf

$(".fade").click(function (){ //klicka på texten för att ta bort den
    $(".fade").fadeOut();
});
