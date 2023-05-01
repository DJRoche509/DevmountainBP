const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById('fortuneButton');
// const userIn = document.querySelector('.userIn');
const addSubmitBtn = document.getElementById('addSubmitSect');
const allSections = document.getElementById('sections')

const baseURL = "http://localhost:4000/api/myApp" ;

const myAppCallback = ({data:sections}) => displaySections(sections);
const errCallback = err => console.log(err.response.data);


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

const setUserInput = body => axios.post(body).then(myAppCallback).catch(errCallback) ; 
    
function submitHandler (e) {
    e.preventDefault();
    let input = document.querySelector('.userIn');

    let bodyObj = {
        sentiment: input.value,
    }

    setUserInput(bodyObj);

    input.value = '';
}

function createSection(section) {
    const aSection = document.createElement('div');
    const aFeeling = document.createElement('h3') ;
    aFeeling.innerText = section.sentiment.charAt(0).toUpperCase() + section.sentiment.slice(1)+' Section';
    aSection.appendChild(aFeeling);
    aSection.classList.add('buttons')

    allSections.appendChild(aSection)
}


function displaySections(arrSection) {
    allSections.innerHTML = '';
    for (let i = 0; i<arrSection.length; i++){
        createSection(arrSection[i])
    }
}

addSubmitBtn.addEventListener('click', submitHandler);
complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
