const generateMemeButton = document.querySelector(".meme-generator .generate-meme-btn");

const memeImage = document.querySelector(".meme-generator img");

const memeTitle = document.querySelector(".meme-generator .meme-title");

const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}

generateMemeButton.addEventListener("click", async () => {
    const response = await fetch("https://meme-api.com/gimme/wholesomememes");
    const result = await response.json();
    updateDetails(result.url, result.title, result.author);
})

window.addEventListener("load", (e) => {
    memeImage.setAttribute("src", "https://shorturl.at/CGIN1");
})