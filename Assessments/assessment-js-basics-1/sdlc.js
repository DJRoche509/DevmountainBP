// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Implementation
// Design
// Maintain
// Analysis of Requirements
// Testing & Integration
// Planning

//Correct order of the SDLC goes as follow:
/*
 * Planning
 * Analysis of Requirements
 * Design
 * Implementation
 * Testing & Integration
 * Maintain
*/


//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 

const analysis_of_Requierements = 'This the phase where all the relevant information is collected from the customer to develop a product as per their expectation. Any ambiguities must be resolved in this phase only' ;

const design = 'In this third part of the phase, the requirement gathered in the SRS document is used as an input and software architecture that is used for implementing system development is derived' ;

const implementation = 'Implementation/Coding starts once the developer gets the Design document. The Software design is translated into source code. All the components of the software are implemented in this phase' ;

const testingAndIntegration = 
    `Testing starts once the coding is complete and the modules are released for testing. In this phase, the developed software is tested thoroughly and any defects found are assigned to developers to get them fixed.
     Retesting, regression testing is done until the point at which the software is as per the customer’s expectation. Testers refer SRS document to make sure that the software is as per the customer’s standard. 
                           
    Once the product is tested, it is deployed in the production environment where first UAT (User Acceptance testing) is done depending on the customer expectation.
                               
    In the case of UAT, a replica of the production environment is created and the customer along with the developers does the testing. If the customer finds the application as expected, then sign off is provided by the customer to go live.` ;

const maintain = 'After the integration or deployment of a product on the production environment, maintenance of the product takes place. if any issue comes up and needs to be fixed or any enhancement is to be done is taken care by the developers' ;


const sdlcArray = [planning, analysis_of_Requierements, design, implementation, testingAndIntegration, maintain] ;

sdlcArray.forEach(element => {
    console.log (element);
    console.log(`\n-----------------------------------------------------------------------\n`)   
});

