var search = document.getElementById("search");
search.addEventListener("click", searchBox);

var search = document.getElementById("searchBox");
function searchBox(){
    search.style.display = "block";
}

// close search
var clsearch = document.getElementById("clSearch");
clsearch.addEventListener("click", closeSearch);

function closeSearch(){
    search.style.display = "none";
}

// search

var searchD = document.getElementById("searchData");
console.log(searchD)
searchD.addEventListener("click", searchData);

function searchData(){
    var input = document.getElementById("searchInput").value;
    console.log(input)

    let url = `https://himalayausa.com/search?type=product&q=${input}`;
    location.href = url;

    input.value = null;
}