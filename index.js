/*global $*/

$(() => {
    
    $.ajax({
        url: "https://newsapi.org/v2/sources",
        method: "GET",
        data: {
            category: "business",
            language: "en",
            country: "us",
            apiKey: "APIKEY"
        }
        
    })
})