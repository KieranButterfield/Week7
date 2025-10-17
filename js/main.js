function showRoutine() {
  /* showRoutine function grabs list, image, audio, and time elements*/
  const routineList = document.getElementById("ul-routine");
  const routineImg = document.getElementById("img-routine");
  const routineAudio = document.getElementById("aud-routine");
  const currentTimeP = document.getElementById("current-time");

  /* Time variables to record the current time */
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Display Current Time
  let period =
    hours >= 12
      ? "PM"
      : "AM"; /* period variable determines AM / PM by if the "hours" value is greater than or equal to 12 */
  let hour12 =
    hours %
    12; /* convert 24-hour format to 12-hour format. If remainder is 0, set hour to 12 */
  hour12 = hour12 ? hour12 : 12; // Convert hours into 0 => 12 for above AM/PM evaluation
  const minuteStr = minutes
    .toString()
    .padStart(
      2,
      "0"
    ); /* minuteStr converts minutes to string and add leading zero if needed (e.g. "5" -> "05") */

  currentTimeP.textContent = `Current time: ${hour12}:${minuteStr}${period}`; /* Combines above variables into current time, by hour, minute(s), and AM/PM */

  let routine = []; /* routine array holds daily routine values */
  let imgSrc = "";
  let audioSrc = "";

  if (hours < 11) {
    /* If hours value is less than 11, it's currently morning */
    // Morning
    routine = [
      "Wake up and stretch",
      "Feed cats",
      "Eat breakfast",
      "Brush teeth",
      "Plan my day",
    ];
    imgSrc = "images/morning.jpg"; /* Morning image relative file path */
    audioSrc = "songs/morning.mp3"; /* Morning mp3 relative file path */
  } else if (hours < 19) {
    /* If hours value is less than 19 (but not morning), it's currently afternoon */
    // Afternoon
    routine = [
      "Work on tasks",
      "Have lunch",
      "Go for a walk",
      "Check emails",
      "Drink water",
    ];
    imgSrc = "images/afternoon.jpg";
    audioSrc = "songs/afternoon.mp3";
  } else {
    /* Otherwise, it's currently evening */
    // Evening
    routine = [
      "Have dinner",
      "Take a shower",
      "Prepare for tomorrow",
      "Relax and read",
      "Go to bed",
    ];
    imgSrc = "images/evening.jpg";
    audioSrc = "songs/evening.mp3";
  }

  // Fill the list dynamically
  routineList.innerHTML = "";
  routine.forEach((item) => {
    /* forEach loop fills unordered list dynamically */
    const li = document.createElement("li");
    li.textContent = item;
    routineList.appendChild(li); /* Each item is appended to the list */
  });

  // Update image and audio
  routineImg.src = imgSrc;
  routineAudio.src = audioSrc;
  routineAudio.load(); // Refresh audio
}
