import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export interface AttInfo {
  id: string,
  name: string,
  photoURL: string
}


const AttendeesList = ({ props }: { props: Array<AttInfo> }) => {

  console.log('Props in Attendees ', props);

  const handleJoin = () => {
    //send an api request to store id of user against id of the event
    //   axios.post(`${baseUrl}/storeAttendes`, JSON.stringify("userId":userId,"eventId":id)).then(response=>{
    //     if (response.status!= 200) {
    //         // const error = (data && data.message) || response.statusText;
    //         return Promise.reject(response.statusText);
    //     }
    //     return (response.status);
    // });
    // const newAtt: AttInfo = {
    //   "id": "a4",
    //   "name": "John Doe",
    //   "photoURL": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
    // }

    // props.push(newAtt);
    // setvalues(props)
    // console.log("New values " + values)
    // renderAttendees()
  }

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
  const [values, setvalues] = useState(props)
  return (<>

    {values &&
      <div className="attendees-list">
        <h4>{`Attendees (${props && props.length})`}</h4>
        <ul>
          {renderAttendees()}
        </ul>
      </div>
    }
    <Button variant="outlined" color="secondary" onClick={handleJoin} style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '200px', minHeight: '60px' }}>
      Join Event
    </Button>
  </>
  )
}

export default AttendeesList;