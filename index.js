


document.addEventListener("DOMContentLoaded", function () {
    //JAVA SCRIPT PART TOP


    //code for the writing gallery page top~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    //Reveal the modal if the plus button is clicked
    document.getElementById('create-text-button').addEventListener('click', revealModal);

    //Hide the modal if the 'x' button is clicked
    document.getElementById('modal-close').addEventListener('click', hideModal);

    document.getElementById('modal-accept').addEventListener('click', getTextInfo)

    document.getElementById('due-date-checkbox').addEventListener('click', checked_due_date)


    //Function for if the due date option is checked
    function checked_due_date(){
        const checkbox = document.getElementById("due-date-checkbox");
        const  dueDateMenu = document.getElementById("text-due-date-input");
        if (checkbox.checked){
            dueDateMenu.disabled = false
        }

        else {
            dueDateMenu.disabled = true
        }

    }

    //Function for hiding the create text modal
    function hideModal(){

        document.getElementById('create-text-modal').classList.add('hidden');

    }

    function revealModal(){

        document.getElementById('create-text-modal').classList.remove('hidden');

    }


    //function for revealing the text information modal
    function revealTextModal(){
        



    }


    //Function for getting text input from user 
    function getTextInfo(){

        var text_name = document.querySelector("#text-name-input").value;
        var word_goal = document.querySelector("#word-count-goal-input").value;
        var due_date = document.querySelector("#text-due-date-input").value;

        //Check if duedate is checked or not
        const checkbox = document.getElementById("due-date-checkbox");

        //Check if any of the inputs are empty
        if (!text_name || !word_goal || (!due_date && checkbox.checked)) {
            alert("One or more fields were left empty. Please fill out all of the fields before submitting.");
            return; 
        }   
        
        //Call the createText function 
        createText(text_name, word_goal, due_date);

    }

    //Function for creating a new text
    function createText(text_name, word_goal, due_date){
        var texts_container = document.getElementsByClassName('texts-container')[0]
        var text_div = document.createElement('div')
        text_div.classList.add('text-file-icon')

        var text_header = document.createElement('div')
        text_header.classList.add('text-file-header')
        var title = document.createElement("span");
        title.classList.add("text-title");
        title.textContent = text_name
        text_header.appendChild(title)

        text_div.appendChild(text_header)

        var text_footer = document.createElement('div')
        text_footer.classList.add('text-file-footer')
        var status = document.createElement("span");
        status.classList.add("text-status");
        status.textContent = 'Status: Incomplete'
        text_footer.appendChild(status)

        text_div.appendChild(text_footer)

        texts_container.appendChild(text_div)

        texts_container.addEventListener('click', revealTextModal);

        hideModal();

    }



    //code for the writing gallery page bottom~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




    //JAVA SCRIPT PART BOTTOM









    const modal = document.getElementById("create-text-modal");
    console.log("Page loaded. Modal:", modal);
});