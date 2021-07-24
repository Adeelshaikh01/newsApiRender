let newsTitle = document.getElementById("newsTitle")
let newsCard = document.getElementById("newsCard");
let loader = document.getElementById("loader")

let getNewstitle = () => {
   return new Promise((resolve,reject) =>{
        removeData();
        setTimeout(() => {
            loader.setAttribute("class", "loader hide")
        }, 1000);
    
       fetch(`https://newsapi.org/v2/everything?q=${newsTitle.value}&from=2021-06-24&sortBy=publishedAt&apiKey=40ea26f0de7e40b9bd565e04dce12a20`)
       .then(response => response.json())
       .then(json => {
           resolve(getData(json))
       })
       .catch(err =>{
        $('#exampleModal').modal('show')
        var exampleModalLabel = document.getElementsByClassName('modal-body')
        exampleModalLabel[0].innerHTML = err;
       })
       loader.setAttribute("class", "loader")
   })
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