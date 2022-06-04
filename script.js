function getCountries(){
    let xhr = new  XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v2/all',true/*true or false for async js */);

    xhr.onload = function(){ //initialize
        if(xhr.status === 200){
            // console.log("good");  //test
            let countries = JSON.parse(this.response);//JSON format
            console.log(countries);
            countries.forEach(country=> {
            const countryCard = document.createElement("div");
            const countryFlagDisplay = document.createElement("img");

            countryCard.innerHTML = country.name;
            countryFlagDisplay.src = country.flag;

            countryCard.appendChild(countryFlagDisplay);
            document.getElementById("display").appendChild(countryCard);
           });
           
        }
    }

    xhr.send();
}
  
