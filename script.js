$(document).ready(function() {

    //set and display the current day and time
    currentTime =  moment().format('LLLL');
    $("#currentDay").text(currentTime);

    var timeArray = [
        {time: "9", format: "9 AM"},
        {time: "10", format: "10 AM"},
        {time: "11", format: "11 AM"},
        {time: "12", format: "12 PM"},
        {time: "13", format: "1 PM"},
        {time: "14", format: "2 PM"},
        {time: "15", format: "3 PM"},
        {time: "16", format: "4 PM"},
        {time: "17", format: "5 PM"},
    ]

    //create the time blocks
    for (var i = 0; i <= timeArray.length; i++){
        let $timeBlock = $("<div></div>").addClass("time-block row");
        $(".container").append($timeBlock);
    }

    //format diplay time
    let displayTime = 0;
    let periodFormat = "";
   
    //create an array of time

    //get stored JSON string of toDo from local storage and parsing it back to an object
    let toDo = JSON.parse(localStorage.getItem("toDo"));




});