import NewMeetupsForms from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  function addMeetupHandler(dataUserStored) {
    fetch(
      "https://react-project-73830-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(dataUserStored),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupsForms onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
