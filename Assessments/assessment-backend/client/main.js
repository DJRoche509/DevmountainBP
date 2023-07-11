const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById('fortuneButton');
// const userIn = document.querySelector('.userIn');
const addSubmitBtn = document.getElementById('addSubmitBtn');
const allSections = document.getElementById('sections')
const newDiv = document.getElementById('newDiv') ; 
let closeBtn ;
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
            res.innerHTML = `
            <div class = 'word'>
                    <h3>
                        <span style="color:black;">${camelWord(data[0].word)}</span> <span style="font-size:10px"> definition</span></h3>
                    <button onclick="playSound()"> 
                        <i class="fas fa-volume-up"></i>
                    </button>
                    </div>
                    <div class="details"><p>${data[0].meanings[0].partOfSpeech}</p><p>/${data[0].phonetic}/</p></div>
                    <p class='word-meaning'> ${data[0].meanings[0].definitions[0].definition} </p>
                    <p class='word-example'> ${data[0].meanings[0].definitions[0].example || ""} </p> 
                    `;
                sound.setAttribute('src', data[0].phonetics[0].audio);
            })
        .catch(() => {
            res.innerHTML = `<h3 class="error">Try again. Could not find "${data[0].word}"</h3>`;
        });
        

        let bodyObj = {
            sentiment: input.value,
        }
        
        setUserInput(bodyObj, fetchData);
        
        input.value = '';
    }
    let id = 0;
    
    let sections = [];  // create an empty array to store the section data

    function createSection(section) {
        id++;
        const aSection = document.createElement('div');
        const aFeeling = document.createElement('h3') ;
        closeBtn =  document.createElement('button'); // create the close button element
        closeBtn.setAttribute('type', 'button');
        closeBtn.setAttribute('title', 'Click to delete');
        closeBtn.setAttribute('aria-label', 'Close');
        closeBtn.innerHTML = 'X';
        aSection.appendChild(closeBtn); // append the close button to the section
        aSection.setAttribute('id', id); 
        aFeeling.innerText = camelWord(section)+' Section';
        aSection.appendChild(aFeeling);
        aFeeling.classList.add('sectionText');
        newDiv.classList.add('resultBox');
        newDiv.appendChild(aSection);    

        // add each section to the sections array
        sections.push({
            id,
            section,
        });
        // add the event listener to the close button
        addCloseBtnEventListener(aSection);
        // return the new section element
        return aSection;
}

function camelWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function playSound () {
    sound.play();
}

function displaySections(arrSection) {
    createSection(arrSection.data)
}

const getSections= () => axios.get(`${baseURL}`).then(res => console.log(res)).catch(err =>console.log(err))


function addCloseBtnEventListener(section) {
    const closeBtn = section.querySelector('button');
    closeBtn.addEventListener('click', function() {
        // find the index of the section in the sections array
        const index = sections.findIndex(s => parseInt(s.id) === parseInt(section.id));
        if (index !== -1) { 
            // remove the section from the sections array
            sections.splice(index, 1);
            // remove the section element from the DOM
            section.remove();
            // call the deleteSection function with the section ID
            deleteSection(parseInt(section.id), sections);
        }
    });
}

function deleteSection(id, sections) {
    axios.delete(`${baseURL}/sections/${id}`)
    .then(res => {
        if (res.status === 200) {
            const updatedSections = sections.filter(section => section.id !== id); console.log(updatedSections, '--updated');
            // update the sections array
            sections.splice(0, sections.length, ...updatedSections);        
        }
    })
    .catch(err => console.log(`Error deleting section ${id}`, err));
}

addSubmitBtn.addEventListener('click', submitHandler);
complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);