import React from "react";

export default function Guide() {
  const handleScheduleOpen = () => {
    var scheduleContainer = document.getElementById("schedule-container");
    scheduleContainer.classList.remove("close-schedule");
    scheduleContainer.classList.add("open-schedule");
    document.body.style.overflow = "hidden";
  };

  const handleScheduleClose = () => {
    var scheduleContainer = document.getElementById("schedule-container");
    scheduleContainer.classList.remove("open-schedule");
    scheduleContainer.classList.add("close-schedule");
    document.body.style.overflow = "auto";
  };

  return (
    <section id="key-dates" className="wrapper">
      <h2>Key Dates</h2>
      <p>
        Lectus proin nibh nisl condimentum. Eleifend donec pretium vulputate
        sapien nec sagittis aliquam malesuada. Vitae ultricies leo integer
        malesuada nunc vel risus commodo.
      </p>
      <p>
        Amet tellus cras adipiscing enim eu turpis. Elementum pulvinar etiam non
        quam lacus suspendisse. Est placerat in egestas erat imperdiet sed
        euismod.
      </p>
      <p>
        Ut enim blandit volutpat maecenas. Amet commodo nulla facilisi nullam
        vehicula ipsum. Quam vulputate dignissim suspendisse in est ante.
      </p>
      <p>
        In metus vulputate eu scelerisque felis imperdiet proin. Interdum velit
        laoreet id donec ultrices tincidunt. Mauris in aliquam sem fringilla ut
        morbi.
      </p>
      <button
        className="schedule-toggle-button"
        id="open-schedule-button"
        type="button"
        onClick={handleScheduleOpen}
      >
        See Schedule
      </button>
      <div id="schedule-container">
        <button
          className="schedule-toggle-button"
          id="close-schedule-button"
          type="button"
          onClick={handleScheduleClose}
        ></button>
      </div>
    </section>
  );
}
