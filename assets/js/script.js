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

        //display saved local storage 
        $("#9amblock .description").val(localStorage.getItem("9amblock"));
        $("#10amblock .description").val(localStorage.getItem("10amblock"));
        $("#11amblock .description").val(localStorage.getItem("11amblock"));
        $("#12pmblock .description").val(localStorage.getItem("12pmblock"));
        $("#1pmblock .description").val(localStorage.getItem("1pmblock"));
        $("2pmblock .description").val(localStorage.getItem("2pmblock"));
        $("3pmblock .description").val(localStorage.getItem("3pmblock"));
        $("4pmblock .description").val(localStorage.getItem("4pmblock"));
        $("5pmblock .description").val(localStorage.getItem("5pmblock"));
    
});