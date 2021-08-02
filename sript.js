fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => showCountry(data))

const countriesDiv = document.getElementById("country-list");

const showCountry = country => {
    for(let i = 0; i < country.length; i++){
        const countryName = country[i].name;

        const countryDiv = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.innerText = countryName;
        p.innerText = country[i].capital;
        countryDiv.appendChild(h3);
        countryDiv.appendChild(p);
        countriesDiv.appendChild(countryDiv);
    }
}
