/*global $ APIKEY*/

$(() => {
    
    $.ajax({
        url: "https://newsapi.org/v2/sources",
        method: "GET",
        data: {
            category: "business",
            language: "en",
            country: "us",
            apiKey: "APIKEY"
        },
        success: function(data) {
            for (var i = 0; i < data.sources.length; i++) {
                var source = document.createElement("OPTION");
                source.setAttribute("value", data.sources[i].id);
                source.innerHTML = data.sources[i].name;
                document.getElementById("selection").appendChild(source);
            }
        }
        
    });
});

$("#source").submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines",
        method: "GET",
        data: {
            sources: (document.getElementById("selection").value),
            apiKey: APIKEY
        },
    });
});