/**
 * this file contain the app settings of the customer, it has default value when created and then allow the 
 * customer to override/edit his settings
 * settings like: language, currency, country, city, custName, phone , email, image, 
 */


const LANGUAGES = {

    ARB : "arabic", 
    ENG :  "english",
}

const COUNTRIES = {

    EGYPTE:"egypt", 
    UNITED_STATES : "united states",
    SAUDIA_ARABIA : 'saudia arabia',

}

const CITIES = {

ISM : 'ismialia', 
CA : 'cairo', 
ALEX : 'alexandrea', 

}

const CURRENCIES = {

    EGP: 'EGP', 
    SAR : "SAR",
    USD : "USD",
    EUR : 'EUR'
}

const Settings = {

    Currency: CURRENCIES.EGP,
    Language: LANGUAGES.ARB,
    Country: COUNTRIES.EGYPTE,
    City: CITIES.ISM,
    name : "customer",
    phone : '', 
    email : '', 
    imageSrc : "",  
}

export { Settings, CITIES, COUNTRIES, LANGUAGES, CURRENCIES};