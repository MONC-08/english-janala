const loadLessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((data) => displayLessons(data.data))
};

const loadLevelWord = (id) =>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayLevelWords(data.data))

}

const displayLevelWords = (words) =>{
    
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = ""

    if(words.length == 0){
        
        wordContainer.innerHTML = `
            <div class=" text-center col-span-full py-5 rounded-lg space-y-4">
                <img class="mx-auto" src="./assets/alert-error.png" alt="">
                <p class="font-bangla text-xl font-medium text-gray-400">এই Lesson-এ কোনো Vocabulary যুক্ত করা হয়নি।</p>
                <h2 class="font-bangla text-2xl font-semibold text-gray-700">পরবর্তী Lesson-এ যান...</h2>
            </div>
        `;
        return
    }

    words.forEach((word) => {
        
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-3">
                <h2 class="font-bold text-2xl">${word.word ? word.word: "শব্দটি খুঁজে পাওয়া যায়নি"}</h2>
                <p class="font-semibold">"${word.meaning ? word.meaning : "অর্থ খুঁজে পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "Pronunciation পাওয়া যায়নি"}"</p>
                <div class="font-bangla text-2xl font-medium"></div>
                <div class="flex justify-between items-center">
                    <button class="btn bg-sky-50 hover:bg-sky-200"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-sky-50 hover:bg-sky-200"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        `;

        wordContainer.append(card)
    });
}

const displayLessons = (lessons) =>{
    // 1. get the container and make initially empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2. get into every lessons
    for (let lesson of lessons){

        // 3. create element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button onclick = loadLevelWord(${lesson.level_no}) class="btn btn-outline btn-primary">
                <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
            </button>
        `;

        // 4. append the element into container
        levelContainer.append(btnDiv)

    }
    
}

loadLessons()