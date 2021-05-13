import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetupData.map((eachmeetup) => (
        <MeetupItem
          key={eachmeetup.id}
          id={eachmeetup.id}
          description={eachmeetup.description}
          address={eachmeetup.address}
          title={eachmeetup.title}
          image={eachmeetup.image}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
