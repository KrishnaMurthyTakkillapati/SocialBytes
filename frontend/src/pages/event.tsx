import { useParams } from "react-router-dom";


const Event=()=>{
    const {id}: {id:string}= useParams();

    return (<><div>Client:{id}</div></>)
}
export default Event;