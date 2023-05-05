const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById('fortuneButton');
// const userIn = document.querySelector('.userIn');
const addSubmitBtn = document.getElementById('addSubmitBtn');
const allSections = document.getElementById('sections')
const newDiv = document.getElementById('newDiv') ; 
const baseURL = "http://localhost:4000/api/myApp" ;

// Query from a dictionnary API
const url = "https://api/dictionaryapi.dev/api/v2/entries/en/" ;
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
    fetch(`${url}${input.value}`)

    let bodyObj = {
        sentiment: input.value,
    }

    setUserInput(bodyObj);

    input.value = '';
}

function createSection(section) {
    const aSection = document.createElement('div');
    const aFeeling = document.createElement('h3') ;
    aSection.innerHTML = '<button type="button" class="btn-close" title="Click to delete" aria-label="Close">X</button>';
    aFeeling.innerText = section.charAt(0).toUpperCase() + section.slice(1).toLowerCase()+' Section'; console.log(aFeeling);
    aSection.appendChild(aFeeling);
    aSection.classList.add('buttons')
    newDiv.appendChild(aSection)
}


function displaySections(arrSection) {
    console.log(arrSection);
        createSection(arrSection.data)
}

addSubmitBtn.addEventListener('click', submitHandler);
complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
