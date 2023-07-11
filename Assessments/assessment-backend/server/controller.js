let sections =[];
let sect_id = 0 ;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomCompliment = compliments[getRandomIndex(compliments)];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['A faithful friend is a strong defense.', 'An inch of time is an inch of gold.', 'Competence like yours is underrated.',
                            'Courtesy begins in the home.', 'Keep your face to the sunshine and you will never see shadows.','Your mind is your greatest asset.']
    
        // Choose random fortune
        let randomFortune = fortunes[getRandomIndex(fortunes)];
        
        res.status(200).send(randomFortune);
    },

    submitHandler: (req, res) => { 
        let {sentiment} = req.body ;
        const newSection = {
            id: ++sect_id,
            section: sentiment,
        }

        !sentiment 
            ? res.status(400).send('Sorry, try again with a single valid WORD.')
            //    : data.push(req.body) 
            :res.status(200).send(sentiment) && sections.push(newSection);

    },

    getSections: (req, res) => {
        res.status(200).send(sentiment)
    },

    deleteSection: (req, res) => {
        const { id }  = req.params;
        const index = sections.findIndex(section => section.id === parseInt(id)); console.log(index, 'Index printed');
        if (index === -1) {
            res.status(404).send(`Section with id ${id} not found`);
        } else {
            // Check if the ids match
            if (sections[index].id === id) {
                sections.splice(index, 1);
                res.status(200).send(`Section with id ${id} deleted successfully`);
            } else {
                res.status(400).send("Bad request");
            }
        }
    },

}

/**
 *  getRandomIndex() is used to automatically calculate and return a random number
 * @param {string} arr - array pass to the function getRandomIndex 
 * @returns {int} - A random number within the length of the array received by getRandomIndex()
 */
function getRandomIndex(arr){
    return Math.floor(Math.random()*arr.length);
}