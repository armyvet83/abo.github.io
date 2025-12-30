// Meeting data (date as YYYY-MM-DD, details)
  const meetings = [
    { date: "2025-10-22", title: "First Meeting of the Season", details: "<p>Pay your Chapter dues before the price increases. 1st and 2nd Year officials no dues owed</p><p>Sign up for Scrimmages</p>" },
    { date: "2025-10-29", title: "Rules Interpretation Meeting", details: "<p>Jack Harper will be leading the meeting</p><p><i>This meeting is mandatory to referee this season</i><p>Sign up for Scrimmages</p><p>7pm, Canyon Randall JH</p>" },
    { date: "2025-11-05", title: "Interpretation Makeup", details: "<p>If you did not make the October 29th meeting, you must attend this meeting to ref this year</p><p>7 PM, Canyon Randall JH</p>" },
    { date: "2025-12-03", title: "Nominations", details: "<p>7 PM, Canyon Randall JH</p>" },
    { date: "2026-01-14", title: "Elections", details: "<p>7 PM, Canyon Randall JH</p>" }
  ];

  // Get today's date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to midnight for comparison

  // Find next meeting
  const nextMeeting = meetings.find(meeting => {
    const meetingDate = new Date(meeting.date);
    return meetingDate >= today;
  }) || meetings[0]; // Default to first if none in future

  // Update DOM
  const nextMeetingDiv = document.getElementById("nextMeeting");
  nextMeetingDiv.innerHTML = `
    <h2><strong>${nextMeeting.date}</strong></h2>
    <h3>${nextMeeting.title}</h3>
    ${nextMeeting.details}
  `;