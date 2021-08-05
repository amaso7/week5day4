
const hcUl = document.getElementById("hcUl")
const hcDiv = document.getElementById("hcDiv")

const hcArr = []
async function hcId(hcLoaded) {
    const addHcID = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`

    let response = await fetch(addHcID)
    let result = await response.json()
    hcLoaded(result)
}
async function hcArticleId(result) {
    const hcApiURL = `https://hacker-news.firebaseio.com/v0/item/${result}.json?print=pretty`

    let response = await fetch(hcApiURL)
    let hcResult = await response.json()
    hcArr.push(hcResult)
    displayHcNews(hcResult)
}
hcId(function (result) {

    for (let i = 0; i < result.length; i++) {
        hcArticleId(result[i])

    }

});
function displayHcNews(result) {
    hcUl.insertAdjacentHTML(
        "beforeend", `<div>${result.title}</div>
                      <div>${result.url}</div>
                      <div>${result.by}</div>
                      <div>${result.time}</div>
        
        `)
    console.log(result.title, result.url, result.by, result.time)


}