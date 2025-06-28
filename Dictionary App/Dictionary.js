var search = document.getElementById('search');
var mean = document.getElementById('mean');

search.addEventListener('click', ()=> {
    var inputText = document.getElementById('inputText').value.trim();

    if (!inputText) {
        mean.innerHTML = "<p class='error'>Please enter a word.</p>";
        return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`)
    .then(res => {
        if (!res.ok) {
            throw new Error("Word not found.");
        }
        return res.json();
    })
    .then(data => {
        var wordData = data[0];
        var meaning = wordData.meanings[0].definitions[0].definition;
        var partOfSpeech = wordData.meanings[0].partOfSpeech;
        var phonetic = wordData.phonetics[0]?.text || "N/A";
        console.log(data);
        
        mean.innerHTML = `
            <p><strong>Word:</strong> ${wordData.word}</p>
            <p><strong>Pronunciation:</strong> ${phonetic}</p>
            <p><strong>Part of Speech:</strong> ${partOfSpeech}</p>
            <p><strong>Meaning:</strong> ${meaning}</p>
        `;
    })
    .catch(err => {
        mean.innerHTML = `<p class="error">${err.message}</p>`;
    });
});
