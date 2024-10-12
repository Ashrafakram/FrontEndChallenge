import $ from "jquery";

const rootApp = document.getElementById("root");

// Initial button setup
rootApp.innerHTML = '<button id="toggle-btn">ON</button>';

// Add a click event listener to the button
$('#toggle-btn').on('click', function () {
    // Check the current text of the button
    if ($(this).text() === 'ON') {
        // Change to OFF
        $(this).text('OFF');
    } else {
        // Change back to ON
        $(this).text('ON');
    }
});
