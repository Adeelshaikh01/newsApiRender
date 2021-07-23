let newsTitle = document.getElementById("newsTitle")
let newsCard = document.getElementById("newsCard");
let loader = document.getElementById("loader")

let getNewstitle = () => {
    removeData();
    setTimeout(() => {
        loader.setAttribute("class", "loader hide")
    }, 1000);
    
    fetch(`https://newsapi.org/v2/everything?q=${newsTitle.value}&from=2021-06-23&sortBy=publishedAt&apiKey=0ba3a1a51e8a41ba84aef40a1e16ad08`)
    .then(response => response.json())
    .then(json => getData(json))
    loader.setAttribute("class", "loader")
}

let getData = (value) => {
    for (let i = 0; i < value.articles.length; i++) {
        let fecthNews = `<div class="card m-3" style="width: 18rem;">
        <img src="${(value.articles[i].urlToImage != null) ? value.articles[i].urlToImage : "images/not-found.png"}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${value.articles[i].title}</h5>
          <p class="card-text">${value.articles[i].description}</p>
          <p class="card-text"><small class="text-danger">${value.articles[i].author}</small></p>
        </div>
      </div>`
        newsCard.innerHTML += fecthNews;
    }
}


function removeData() {
    var selectData = document.getElementsByClassName("card")
    for (var i = selectData.length - 1; i >= 0; i--) {
        console.log(selectData[i].remove())
    }
}