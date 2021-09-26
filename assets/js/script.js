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

    //display saved local storage data
    $("#block9 .description").val(localStorage.getItem("block9"));
    $("#block10 .description").val(localStorage.getItem("block10"));
    $("#block11 .description").val(localStorage.getItem("block11"));
    $("#block12 .description").val(localStorage.getItem("block12"));
    $("#block13 .description").val(localStorage.getItem("block13"));
    $("#block14 .description").val(localStorage.getItem("block14"));
    $("#block15 .description").val(localStorage.getItem("block15"));
    $("#block16 .description").val(localStorage.getItem("block16"));
    $("#block17 .description").val(localStorage.getItem("block17"));
    
    // function to check if time block is in past, present, or future
    function hourColor() {
        var presentHour = moment().hour();

        //loop over time blocks
        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("block")[1]);
        
            //assign class based on presentHour
            if (hourBlock < presentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this). removeClass("present");
            }
            else if (hourBlock === presentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourColor();
});