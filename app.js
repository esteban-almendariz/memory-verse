

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a651510380msh991c012fe6e0813p17ebe3jsn2669dd86b2e4',
        'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
    }
};

fetch('https://ajith-holy-bible.p.rapidapi.com/GetVerses?Book=Luke&chapter=1&VerseFrom=5&VerseTo=5', options)
    .then(response => response.json())
    .then(response => {
        document.getElementById('bible-data').textContent = response.Output;
        console.log(response.Output)
    })
    .catch(err => console.error(err));



const modal = document.getElementById("verseModal");
const btn = document.getElementById("verseBtn");
const closeModel = document.getElementsByClassName("closeModal")[0];

btn.addEventListener('click', function () {
    modal.style.display = 'block'
})
// When the user clicks on <span> (x), close the modal
closeModel.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it NEED TO REWRITE THIS WITH EVENTLISTENER
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

