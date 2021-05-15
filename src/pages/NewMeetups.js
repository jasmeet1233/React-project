import NewMeetupsForms from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {

  function addMeetupHandler(dataUserStored){
    fetch('https://react-project-73830-default-rtdb.asia-southeast1.firebasedatabase.app/meetips.json');
  }

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupsForms onAddMeetup = {addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
