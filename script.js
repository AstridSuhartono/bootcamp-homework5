$(document).ready(function() {

    //set and display the current day and time
    currentTime =  moment().format('LLLL');
    $("#currentDay").text(currentTime);

    //create an array of time
    var timeArray = ["9 AM","10 AM","11 AM", "12 PM", "1 PM","2 PM","3 PM","4 PM","5 PM"];
    var todosArray = [];
   
    init();
  

    //create the time blocks
    function renderTimeBlocks(){
        for (var i = 9; i <= 17; i++){
            let index = i - 9;
            let timeBlock = $("<div></div>").addClass("time-block row");
            let timeArea = $("<div></div>").addClass("hour col-2").text(timeArray[index]);
            let textArea = $("<textarea></textarea>").addClass("description col-9 input"+index).text("");
            let button = $("<button></button>").addClass("saveBtn col-1").attr("data-btnIndex", index);
            let saveIcon = $("<i></i>").addClass("fas fa-save fa-2x");
            $(".container").append(timeBlock);
            timeBlock.append(timeArea,textArea,button);
            button.append(saveIcon);
            
            //set the colour of the text area
            setRowColour(textArea,i);

            textArea.text(todosArray[index]);

        }
    }

    //function to set the colour of the text area based on the time of the day
    function setRowColour(row,hour){
        if(hour < parseInt(moment().format('H'))){
            row.addClass("past");
        }else if(hour > parseInt(moment().format('H'))){
            row.addClass("future");
        }else{
            row.addClass("present");
        }
    }

    function init() {
        // Get stored todos from localStorage
        // Parsing the JSON string to an object
            var storedTodos = JSON.parse(localStorage.getItem("todos"));
        
            // If todos were retrieved from localStorage, update the todos array to it
            if (storedTodos !== null) {
                todosArray = storedTodos;
            } else{
                todosArray = new Array();
            }

            renderTimeBlocks();
        }


    function storeTodos() {
        // Stringify and set "todos" key in localStorage to todos array
        localStorage.setItem("todos", JSON.stringify(todosArray));
      }

    //when button is clicked
    $(".button").on("click",function(event){
        event.preventDefault(); 
        let index = $(this).attr("data-btnIndex");
        let todoText = $(".input"+index).text();
        // Return from function early if submitted todoText is blank
        if (todoText === "") {
            return;
        }
        // Add new todoText to todos array
        todosArray[index] = todoText;

        // Store updated todos in localStorage
        storeTodos();
        renderTimeBlocks();

    });

});