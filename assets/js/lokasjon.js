//VARIABLER
const select = document.querySelector(".velg");
const iframe = document.querySelector(".iframe");
const bergen = "ChIJd312ZkkNOUYRCAretD6gQp4";
const oslo = "ChIJOfBn8mFuQUYRmh4j019gkn4";
const førde = "ChIJM01kBdwzFkYR0MUz2cKB0RE";
let value = select.value;

oppdater();

function oppdater(){
    let sted;
    value = select.value;
    if(value === "1"){
        sted = bergen;
    }else if(value === "2") {
        sted = oslo;
    } else if(value === "3"){
        sted = førde;
    }else {
        console.log("Error");
        return;
    }
    iframe.setAttribute("src",`https://www.google.com/maps/embed/v1/place?q=place_id:${sted}&key=AIzaSyDe7EehqYkudsCG5d4Q177xBzdHyhhD9sg`);
}

//AddEventListener
select.addEventListener("change", () => {
    oppdater();
})