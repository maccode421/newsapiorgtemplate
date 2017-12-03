/*global $ APIKEY*/

$(() => {
    
    $.ajax({
        url: "https://newsapi.org/v2/sources",
        method: "GET",
        data: {
            category: "technology",
            language: "en",
            country: "us",
            apiKey: APIKEY
        },
        success: function(data) {
            console.log(data);
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
        success: function(data) {
            console.log(data);
            for (var i = 0; i < data.articles.length; i++) {
                var list = document.createElement("UL");
                var headlines = document.createElement("LI");
                var linkHeadlines = document.createElement("a");
                headlines.innerHTML = data.articles[i].title;
                linkHeadlines.href = data.articles[i].url;
                linkHeadlines.innerHTML = data.articles[i].description;
                document.getElementById("headlines").appendChild(headlines).appendChild(linkHeadlines);
            }
        }
    });
});