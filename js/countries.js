const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHtml = countries.map(country => getCountryHtml(country));
    // console.log(countriesHtml[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');

}

// option 2
const getCountryHtml = ({ name, flags, area, region }) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Region: ${region}</p>
            <img src="${flags.png}" alt="">
        </div>
    `
}

// option 1
// const getCountryHtml = country => {
//     // option 1
//     const { name, flags } = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}" alt="">
//         </div>
//     `
// }

// original
// const getCountryHtml = country => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}" alt="">
//         </div>
//     `
// }

loadCountries();