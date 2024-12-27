
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    const formatTime = (time) => time < 10 ? `0${time}` : time;

    let hours = currentTime.getHours();
    let period = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format, handle 0 as 12

    // Update the time display
    document.getElementById('hrs').innerHTML = formatTime(hours);
    document.getElementById('min').innerHTML = formatTime(currentTime.getMinutes());
    document.getElementById('sec').innerHTML = formatTime(currentTime.getSeconds());
    
    // Add the period (AM/PM)
    document.getElementById('period').innerHTML = period;

    // Get today's day, date, and month
    const dayOfWeek = currentTime.toLocaleString('default', { weekday: 'long' }); // Full weekday name (e.g., Monday)
    const date = currentTime.getDate(); // Day of the month (1 to 31)
    const month = currentTime.toLocaleString('default', { month: 'long' }); // Full month name (e.g., January)
    
    // Display the date, day, and month
    document.getElementById("dayOfWeek").innerHTML = dayOfWeek; // Display the weekday (e.g., "Monday")
    document.getElementById("date").innerHTML = date; // Display the date (e.g., "15")
    document.getElementById("month").innerHTML = month;

},1000)

     