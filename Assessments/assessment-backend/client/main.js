const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById('fortuneButton');
// const userIn = document.querySelector('.userIn');
const addSubmitBtn = document.getElementById('addSubmitBtn');
const allSections = document.getElementById('sections')
const newDiv = document.getElementById('newDiv') ; 
const baseURL = "http://localhost:4000/api/myApp" ;

// Query from a dictionnary API
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" ;
const res = document.getElementById('result');
const sound = document.getElementById('sound');

const myAppCallback = (data) => displaySections(data);
const errCallback = err => console.log(err);


const getCompliment = () => {
    axios.get(`${baseURL}/compliment/`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(`${baseURL}/fortune/`)
        .then((result) => {
            const data = result.data;
            alert(data);
    });
};

const setUserInput = body => axios.post(`${baseURL}/sections`, body).then(myAppCallback).catch(errCallback) ; 
    
function submitHandler (e) {
    e.preventDefault();
    let input = document.querySelector('.userIn'); 
    const fetchData = fetch(`${url}${input.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.innerHTML = `
                <div class = 'word'>
                    <h3>
                        <span style="color:black;">${camelWord(data[0].word)}</span> <span style="font-size:10px"> definition</span></h3>
                    <button> 
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details"><p>${data[0].meanings[0].partOfSpeech}</p><p>/${data[0].phonetic}/</p></div>
                <p class='word-meaning'> ${data[0].meanings[0].definitions[0].definition} </p>
                <p class='word-example'> ${data[0].meanings[0].definitions[0].example || ""} </p> 
            `;
            //
            })
        .catch(() => {
            res.innerHTML = `<h3 class="error">Try again. Could not find "${input.value}"</h3>`;
        });
        

    let bodyObj = {
        sentiment: input.value,
    }

    setUserInput(bodyObj, fetchData);

    input.value = '';
}

function createSection(section) {
    const aSection = document.createElement('div');
    const aFeeling = document.createElement('h3') ;
    aSection.innerHTML = '<button type="button" class="btn-close" title="Click to delete" aria-label="Close">X</button>';
    aFeeling.innerText = camelWord(section)+' Section'; console.log(aFeeling);
    aSection.appendChild(aFeeling);
    aFeeling.classList.add('sectionText')
    newDiv.classList.add('resultBox')
    newDiv.appendChild(aSection)
}

function camelWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function displaySections(arrSection) {
    console.log(arrSection);
        createSection(arrSection.data)
}

addSubmitBtn.addEventListener('click', submitHandler);
complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
