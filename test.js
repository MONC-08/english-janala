const createElements = (arr) =>{
    htmlElements = arr.map((el) => `<span class="btn">${el}</span>`);
    console.log(htmlElements.join(" "));
}

const synonyms = ["hello", "hi", "bonjour"]
createElements(synonyms)