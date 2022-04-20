import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../contexts";

export interface AttInfo {
  id: string,
  name: string,
  photoURL: string
}

const baseUrl = 'http://localhost:9010/api';

const AttendeesList = ({ props, joinEvent, id }: { props: Array<AttInfo>, joinEvent: boolean, id: string}) => {

  console.log('Props in Attendees ', props);
  const context = useContext(AppContext)
  const history = useHistory();

  const handleJoin = () => {
    //send an api request to store id of user against id of the event
      axios.get(`${baseUrl}/joinevent?id=${id}`, {withCredentials: true}).then(response=>{
        console.log(response)
        if (response.status!= 200) {
            return Promise.reject(response.statusText);
        }
        if (response.status == 200) {
          history.push("/search-event")
        }
        return (response.status);
    });
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
    {(!joinEvent) && <Button variant="outlined" color="secondary" onClick={handleJoin} style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '200px', minHeight: '60px' }}>
      Join Event
    </Button>}
  </>
  )
}

export default AttendeesList;