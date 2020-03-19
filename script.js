$(document).ready(function() {

    //set and display the current day and time
    currentTime =  moment().format('LLLL');
    $("#currentDay").text(currentTime);

    //create an array of time
    var timeArray = ["9 AM","10 AM","11 AM", "12 PM", "1 PM","2 PM","3 PM","4 PM","5 PM"]

    //create the time blocks
    for (var i = 0; i < timeArray.length; i++){
        let timeBlock = $("<div></div>").addClass("time-block row");
        let timeArea = $("<div></div>").addClass("hour col-2").text(timeArray[i]).attr("data-time",i + 9);
        let textArea = $("<textarea></textarea>").addClass("description col-9");
        let button = $("<button></button>").addClass("saveBtn col-1");
        let saveIcon = $("<i></i>").addClass("fas fa-save fa-lg");
        $(".container").append(timeBlock);
        timeBlock.append(timeArea,textArea,button);
        button.append(saveIcon);
        
        //set the colour of the text area
        setRowColour(textArea,$(".hour").attr("data-time"));
    }

    //function to update the colour of the text area based on the time of the day
    function setRowColour(row,hour){
        if(hour < moment().format('H')){
            row.addClass("past");
        }else if(hour == moment().format('H')){
            row.addClass("present");
        }else{
            row.addClass("future");
        }
    }

    //get stored JSON string of toDo from local storage and parsing it back to an object
    let toDo = JSON.parse(localStorage.getItem("toDo"));




});