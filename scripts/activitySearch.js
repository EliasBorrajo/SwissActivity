console.log("activitySearch.js loaded");


// This function is called when the user clicks the search button
function searchActivity() {
    //call API to get the list of activities based on the search criteria
    var searchCriteria = document.getElementById("city").value;
    console.log("searchCriteria: " + searchCriteria);

    var url = "http://localhost:8080/api/activities/" + searchCriteria;
    console.log("url: " + url);
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                var activities = JSON.parse(xhr.responseText);
                console.log(activities);
                displayActivities(activities);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    }
    xhr.send(null);


}