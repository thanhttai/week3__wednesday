const apiToken = "edc203229aaa08fb70ce256f2a415cae"
const baseUrl = `https://gnews.io/api/v4`
const path = "/search"
const query = `?q=example&token=${apiToken}`
// const fetchData = () => {
//     const url = baseUrl + path + query
//     const fromFetch = fetch(url);
//     fromFetch
//         .then(success => {
//             return success.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
// }

// fetchData()

const fetchAsync = async () => {
    const url = baseUrl + path + query;
    // console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    console.log("data object", data);
    const articles = data.articles;
    console.log(articles);

    const hmtlTitleArea = document.querySelector('.container__main')
    const htmlOutput = articles.map(singleArticle => {
        return renderArticle(singleArticle)
    })

    hmtlTitleArea.innerHTML = htmlOutput.join('');
}
fetchAsync()

function renderArticle(singleArticle) {

    return `
    <div class="col l-4 m-6 c-12 content__container__api">
        <ul id="content">
            <li class="content__item">
                <h1 class="heading__content">${singleArticle.title}</h1>
                <img src="${singleArticle.image}" width="300px" class="content__img" />
                <div class="content__time">${singleArticle.publishedAt}</div>
                <p>${singleArticle.description}</p>
                <h4>${singleArticle.source.name}</h4>
                <a href="${singleArticle.url}" target="_blank" class="content__link">Click here to detail !</a>
            </li>
        </ul>
    </div>
    `

}
renderArticle()