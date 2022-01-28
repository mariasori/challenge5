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
    
    // converting time to display different colors
    var hour9 = 9;
    var hour10 = 10;
    var hour11 = 11;
    var hour12 = 12;
    var hour13 = 13;
    var hour14 = 14;
    var hour15 = 15;
    var hour16 = 16;
    var hour17 = 17;

    var currentHour = moment().format('H');

    // 9am class changes
    if (currentHour < hour9) {
        $("#block9").addClass("future");
    } else if (currentHour > hour9) {
        $("#block9").addClass("past");
    } else if (currentHour = hour9) {
        $("#block9").addClass("present");
    }

    // 10am class changes
    if (currentHour < hour10) {
        $("#block10").addClass("future");
    } else if (currentHour > hour10) {
        $("#block10").addClass("past");
    } else if (currentHour = hour10) {
        $("#block10").addClass("present");
    }

    // 11am class changes
    if (currentHour < hour11) {
        $("#block11").addClass("future");
    } else if (currentHour > hour11) {
        $("#block11").addClass("past");
    } else if (currentHour = hour11) {
        $("#block11").addClass("present");
    }

    // 12pm class changes
    if (currentHour < hour12) {
        $("#block12").addClass("future");
    } else if (currentHour > hour12) {
        $("#block12").addClass("past");
    } else if (currentHour = hour12) {
        $("#block12").addClass("present");
    }

    // 1pm class changes
    if (currentHour < hour13) {
        $("#block13").addClass("future");
    } else if (currentHour > hour13) {
        $("#block13").addClass("past");
    } else if (currentHour = hour13) {
        $("#block13").addClass("present");
    }

    // 2pm class changes
    if (currentHour < hour14) {
        $("#block14").addClass("future");
    } else if (currentHour > hour14) {
        $("#block14").addClass("past");
    } else if (currentHour = hour14) {
        $("#block14").addClass("present");
    }

    // 3pm class changes
    if (currentHour < hour15) {
        $("#block15").addClass("future");
    } else if (currentHour > hour15) {
        $("#block15").addClass("past");
    } else if (currentHour = hour15) {
        $("#block15").addClass("present");
    }

    // 4pm class changes
    if (currentHour < hour16) {
        $("#block16").addClass("future");
    } else if (currentHour > hour16) {
        $("#block16").addClass("past");
    } else if (currentHour = hour16) {
        $("#block16").addClass("present");
    }

    // 5pm class changes
    if (currentHour < hour17) {
        $("#block17").addClass("future");
    } else if (currentHour > hour17) {
        $("#block17").addClass("past");
    } else if (currentHour = hour17) {
        $("#block17").addClass("present");
    }
});