import { Button } from "@mui/material";

export interface AttInfo {
  id: string,
  name: string,
  photoURL: string
}


const AttendeesList = ({ props }: { props: Array<AttInfo> }) => {

  console.log('Props in Attendees ', props);

  const renderAttendees = () => {
    return Array.from(props).map((a) => {
      return <li key={a.id}>
        <div className="attendee-item">
          <img src={a.photoURL} alt="attendee" />
          <h5 style={{ color: 'red' }}>{a.name}</h5>
        </div>
      </li>
    })
  }
  return (<>
    <div className="attendees-list">
      <h4>{`Attendees (${props && props.length})`}</h4>
      <ul>
        {renderAttendees()}
      </ul>
    </div>
    <Button variant="outlined" color="secondary"  style={{maxWidth: '30px', maxHeight: '30px', minWidth: '200px', minHeight: '60px'}}>
      Join Event
    </Button>    </>
  )
}

export default AttendeesList;