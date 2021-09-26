$(document).ready(function () {
    //display current day
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    //save button event listener
    $(".saveBtn").on("click", function () { 
        // create variable for textarea
        var text = $(this).siblings(".description").val();
        //create variable for time-slot
        var time = $(this).parent().attr("id"); 

        //save variables in local storage
        localStorage.setItem(time, text);
    });
});