import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-c25dc-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST', 
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
