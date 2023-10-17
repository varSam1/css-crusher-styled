let volunteerName = "Nick";
let moto = "Nick is here to save the web from bad styles! With the power to manipulate CSS at will, Nick ensures every website is visually stunning.";
let hoursMonday = 3;
let hoursTuesday = 2;
let hoursWednesday = 0;
let hoursThursday = 4;
let hoursFriday = 1;
let minimumVolunteerHours = 12;

//1. Define a variable 'totalHours' that sums up the volunteer hours from Monday to Friday.
let totalHours = hoursMonday + hoursTuesday + hoursWednesday + hoursThursday + hoursFriday;


//2. Update the 'moto' variable to "Saving the web using CSS."
moto = "Saving the web using CSS.";

//3. Console.log the following statement: "<volunteerName> has contributed <totalHours> hours this week."
console.log(volunteerName+" has contributed "+totalHours+" hours this week.");

//4. Determine if Nick has met the weekly minimum volunteer hours by creating a new boolean variable called “minimumHoursMet” and setting it to true/false. 
function checkHours(totalHours, minimumVolunteerHours) {
     if(totalHours >= minimumVolunteerHours)
          return true;
     return false;
}
let minimumHoursMet = checkHours(totalHours, minimumVolunteerHours);
 //5. Introduce a new variable 'hoursSaturday' and assign a value of 2 to it.
let hoursSaturday = 2;

//6. Adjust the 'totalHours' variable to include 'hoursSaturday' in the total hours calculation.
totalHours += hoursSaturday;

//7. As a token of gratitude, Nick would like the 'volunteerName' to be changed to your name.
volunteerName = "Samantha";

//8. Create a variable 'volunteerStatusMessage' that holds the message "met the goal" if the total volunteer hours surpass the minimum volunteer hours, or "did not meet the goal" otherwise. Feel free to use conditionals in this task.
minimumHoursMet = checkHours(totalHours, minimumVolunteerHours);

let volunteerStatusMessage = "not meet the goal";
if(minimumHoursMet)
     volunteerStatusMessage = "met the goal"
else
     volunteerStatusMessage = "not meet the goal"

//9. Console.log the following message: "<volunteerName> volunteered for <hoursMonday>, <hoursTuesday>, <hoursWednesday>, <hoursThursday>, <hoursFriday>, <hoursSaturday> hours respectively and their total contribution is <totalHours> hours."
console.log(volunteerName+" volunteered for "+hoursMonday+", "+hoursTuesday+", "+hoursWednesday+", "+hoursThursday+", "+hoursFriday+", "+hoursSaturday+" hours respectively and her total contribution is "+totalHours+" hours.");
//10. Console.log the statement: "<volunteerName> has <volunteerStatusMessage> this week."
console.log(volunteerName+" has "+volunteerStatusMessage+" this week.");
