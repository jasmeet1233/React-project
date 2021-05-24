import {useEffect, useState} from "react"

import MeetupList from "../components/meetups/MeetList";
// import MeetupItem from "../components/meetups/MeetupItem";
import reactDom from "react-dom";


function AllMeetupsPage(){
  const [Isloading, setIsloading] = useState(true);
  const [LoadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsloading(true);
    fetch("https://react-project-73830-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json")
    .then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];
      
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup)
      }
      
      setIsloading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

  if (Isloading){
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

    return <div> 
        <h1>All meetups</h1>
       <MeetupList meetupData = {LoadedMeetups}/>
    </div>
}

export default AllMeetupsPage;