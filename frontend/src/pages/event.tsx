import { useParams } from "react-router-dom";
import { Grid } from '@mui/material';
import eventInfo from '../lib/eventpage.json'
import EventCard from "../utils/EventCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock,
    faMapMarkerAlt,
    faPencilAlt,
    faTrash,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';

export const EventPage = () => {
    const { id }: { id: string } = useParams();
    const title='First';
    const hostPhotoURL=require('../utils/images/default-user.png');;
    const hostName='krishma';
    const description='This is description';
    const css = `
    .m-details {
        grid-column: 4 / span 12;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 12rem 20rem 35rem 22rem auto;
    }
    
    .m-details-banner{
        grid-column: 1 / span 12;
        grid-row: 1 / span 1;
        padding: 1.5rem .5rem .5rem .5rem;
        margin-top: .3rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 1fr 3fr;
        border-bottom: 1px solid #CCC;
    }
    
    .m-details-banner h2, h3, h4, h5, h6{
        margin: 0;
        padding: 0;
    }
    .details-cal-day{
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
        text-align: center;
        padding: .6rem;
        background-color: #FFF;
        border-radius: .3rem;
        border: 1px solid #CCC;
    }
    
    .details-cal-day h4:first-child{
        color: red;
    }
    
    .details-title{
        grid-column: 3 / -1;
        grid-row: 1 / span 1;
        line-height: 1.5rem;
        border-left: 2px solid green;
        padding-left: 1rem;
    }
    
    .details-host{
        grid-column: 3 / -1;
        padding: .3rem 0 0 1rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }
    
    .details-host img{
        grid-column: 1 / span 3;
        border-radius: 50%;
        margin: 0;
        padding: 0;
        // width:100px;
        // height:100px;
    }
    
    .details-host p{
        grid-column: 4 / -1;
    }
    
    .m-details-description{
        grid-column: 1 / span 12;
        grid-row: 2 / span 1;
        margin-top: 1rem;
    }
    
    .m-details-description p{
        text-align: justify;
        line-height: 1.2rem;
    }
    
    .m-details-venue{
        grid-column: 1 / span 12;
        grid-row: 3 / span 1;
        padding: 3rem;
        display: grid;
        grid-template-rows: 1fr 1fr;
    }
    
    .m-details-location{
        grid-row: 1 / span 1;
        background-color: #FFF;
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
    }
    
    .m-details-map{
        grid-row: 2 / span 1;
    }
    
    .m-details-attendees{
        grid-column: 1 / span 12;
        grid-row: 4 / span 1;
    }
    
    .m-details-comments{
        grid-column: 1 / span 12;
        grid-row: 5 / span 1;
    }
        `
    return (<>
        {/* <Grid container spacing={5}>
            {
                eventInfo.filter((event) =>
                    event.groupname.includes(id)).map((filteredEvent) => {
                        return (
                            <Grid key={id} item>
                                <EventCard {...filteredEvent} />
                            </Grid>
                        );
                    })
            }
        </Grid> */}
        <style>
                    {css}
        </style>
        <div className="m-details">
                <div className="m-details-banner">
                    <div className="details-cal-day">
                        <h4>25</h4>
                        <h4>AUG</h4>
                    </div>
                    <div className="details-title">
                        <h5>Tuesday, 25th August, 2018</h5>
                        <h2>{title || ""}</h2>
                    </div>
                    <div className="details-host">
                        <img src={hostPhotoURL} alt="host"  />
                        <p>Hosted by: <strong>{hostName}</strong></p>
                    </div>
                    <section className="m-text">
                        <span className="b-edit"><FontAwesomeIcon icon={faPencilAlt} /></span>
                        <span className="b-delete"><FontAwesomeIcon icon={faTrash} /></span>
                    </section>
                </div>
                <div className="m-details-description">
                    <h4>What is it about?</h4>
                    <p>{description}</p>
                </div>
                {/* <div className="m-details-venue">
                    <div className="m-details-location"></div>
                    <div className="m-details-map">
                        <LocationMap venue={venue} venueLatLng={venueLatLng} />
                    </div>
                </div>
                {attendees &&
                    <div className="m-details-attendees">
                    <AttendeesList attendees={attendees}/>
                    </div>
                }
                {comments &&
                    <div className="m-details-comments">
                    <CommentsList comments={comments} />
                    </div>
                } */}
            </div>
    </>)
}
