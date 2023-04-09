/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = 'Git is a DevOps tool, a free and open-source version control system used to handle small to very large projects with speed and efficiency';



//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = 'GitHub is an online software development platform. More precisedly, a Git repository hosting service that provides a web-based graphical interface' ;



//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = 'Git init is one way to start a new project with Git.The git init command is used to generate a new, empty Git repository or to reinitialize an existing one';



//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = 'Git clone is a command used to create a copy of a specific local/remote repository or branch within a repository.';



//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = 'The "git status" command shows the current state of your Git working directory and staging area';



//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = 'The "git add" command adds new or changed files in your working directory to the Git staging area. It ultimately allows you to stage files in your local project directory';
const gitAddCode = 'git add . or git add *';  //git add* add all the files in the current directory except the hidden ones. Whereas git add. add all files (includding hidden files), folders, and subfolders to the staging area



//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = 'GIt commit is a representation/snapshot of your entire repo at a specific point in time';
const gitCommitCode = 'git commit -m "initial commit" ';  //git commit -am "another message" adds all files and commits at once.



//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = 'The git push command uploads content from a local repository to a remote repository';


