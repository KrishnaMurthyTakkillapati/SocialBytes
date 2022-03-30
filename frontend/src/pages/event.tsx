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
import LocationMap from "../components/LocationMap";
import AttendeesList, { AttInfo } from "../components/Attendees";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { eventService } from "../service/eventService";
import { IFormInput } from "./CreateEvent";
import { useEffect, useState } from "react";
import Image from 'material-ui-image'

export const EventPage = () => {
    const { id }: { id: string } = useParams();//TODO:change to useEffect & add hostname
    const [thisEvent, setThisEvent] = useState<IFormInput>();
    useEffect(() => {
        eventService.getAll().then(response => {
            console.log("INside response")
            const resData = response as Array<IFormInput>;
            setThisEvent(resData.filter(points => points.ID === id)[0]);
            console.log(thisEvent);
        })

    }, [])
    console.log("Id" + id);
    const title = thisEvent?.Name;
    const hostPhotoURL = thisEvent?.Image;
    const hostName = 'krishma';
    const description = thisEvent?.Description
    //'TLorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo atque repellat eos aut maxime, incidunt voluptatem, animi impedit, exercitationem nihil neque! Facere sint vel, ratione deleniti est rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, hic ducimus praesentium repellendus ipsum aspernatur architecto ut consequatur, velit dolorem cum placeat ab in maiores sint fugiat? Soluta, quos dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam quo atque. Saepe et neque ducimus laborum ea repellendus nisi, animi, cum optio, nesciunt velit! Obcaecati distinctio corrupti quod praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo atque repellat eos aut maxime, incidunt voluptatem, animi impedit, exercitationem nihil neque! Facere sint vel, ratione deleniti est rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, hic ducimus praesentium repellendus ipsum aspernatur architecto ut consequatur, velit dolorem cum placeat ab in maiores sint fugiat? Soluta, quos dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam quo atque. Saepe et neque ducimus laborum ea repellendus nisi, animi, cum optio, nesciunt velit! Obcaecati distinctio corrupti quod praesentium?';
    const attendees: Array<AttInfo> = [
        {
            "id": "a1",
            "name": "John Doe",
            "photoURL": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
        },
        {
            "id": "a2",
            "name": "Tanko Sani",
            "photoURL": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
        },
        {
            "id": "a3",
            "name": "Abu Jega",
            "photoURL": "https://randomuser.me/api/portraits/thumb/men/45.jpg"
        }

    ];
    const css = `/* ======General====== */
    .App{
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: 3.5rem auto 15rem;
    }
    
    a{
        color: #263B30;
        font-weight: bold;
    }
    
    a:link {
        text-decoration: none;
    }
    
    a:visited {
        text-decoration: none;
    }
    
    a:hover {
        color: lightgreen;
        font-weight: bold;
    }
    
    a:active {
        text-decoration: underline;
    }
    
    button{
        outline: none;
    }
    
    button, img{
        max-width: 100%;
    }
    
    button:hover{
        cursor: pointer;
    }
    
    
    /* =======Home========= */
    .home{
        height: 100vh;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-image: url('./utils/images/beach2.jpg');
        background-size: cover;
        background-position: center;
        background-color: rgba(0,0,0,.5);
        background-blend-mode: darken;
        color: #FFF;
    }
    
    .home-content{
        z-index: 1;
    }
    
    .btn-start{
        background-color:orange;
        font-weight: bold;
    }
    
    .btn-start:hover{
        background-color: #FFF;
        color: navy;
    }
    
    
    /* =======Navbar========= */
    .navbar{
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: 3rem 1.8rem;
        background-color: #FFF;
        border-bottom: .1rem solid #CCC;
    }
    
    .navbar-brand{
        grid-column: 3 / span 4;
        padding-top: .7rem;
        margin-left: 1.5rem;
    }
    
    .navbar button, .btn-start{
        grid-column: 10 / span 3;
        width: 7rem;
        height: 2rem;
        border-radius: .5rem;
        border: 2px solid #000;
        margin-top: .5rem;
    }
    
    .navbar button:hover{
        cursor: pointer;
        background-color: green;
        border-color: yellow;
        color: yellow;
        font-weight: bold;
    }
    
    .navbar button:active{
        outline-color: #FFF;
    }
    
    .navbar-ul {
        grid-column: 17 / -3;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    }
    
    .nav-2{
        grid-column: 1 / -1;
        background-color: #263B30;
        color: orange;
        font-size: .7rem;
    }
    
    .nav-2 ul {
        width: 85%;
        margin-left: 3.2rem;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .nav-2 ul li{
        margin-right: .8rem;
        border-right: .5px solid orange;
        padding-right: .5rem;
    }
    
    
    /* =======Meeting List====== */
    .meetings-list,
    .no-meetings{
        grid-column: 4 / span 12;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    
    .meetings-list,
    .m-details,
    .m-activities,
    .m-form,
    .no-meetings{
        padding-top: 2rem;
    }
    
    .m-list-categories{
        grid-column: 1 / span 1;
        padding: 2.5rem 1.5rem 0 0;
    }
    
    .m-list-categories ul{
        list-style: none;
        padding-left: 0;
        line-height: 2rem;
    }
    
    .m-list-items{
        grid-column: 2 / span 3;
    }
    
    .m-list-items h4{
        margin-bottom: 1rem;
    }
    
    .no-meetings{
        margin: 4rem auto;
        font-size: 1.5rem;
        text-align: center;
    }
    
    .meeting{
        width: 98.5%;
        height: 11rem;
        border-radius: .2rem;
        margin-bottom: .7rem;
        background-color: #FFF;
        border: 1.5px solid #DDD;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 6rem 2rem 2rem;
    }
    
    .m-title{
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
    
    .m-host{
        grid-column: 1 / span 1;
        margin-right: 1rem;
        padding: .7rem 0 0 .7rem;
    }
    
    .m-header{
        grid-column: 3 / -1;
        padding-top: 1rem;
    }
    
    .m-header p{
        font-size: .6rem;
        padding-top: 0;
    }
    
    .m-time{
        grid-column: 1 / -1;
        padding: .3rem 0 .7rem 0.7rem;
        border-top: .5px solid #DDD;
        margin-top:.5rem;
        border-bottom: .5px solid #DDD;
        color: #AAA;
    }
    
    .m-time span{
        margin-right: 1rem;
    }
    
    .m-attendee{
        grid-column: 1 / -1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #DDD;
        list-style: none;
        padding: 0 .5rem;
        margin: 0;
        background-color: #CCC;
    }
    
    .m-attendee ul li{
        height: 100%;
    }
    
    .m-attendee img{
        padding: 1px;
        border: .5px solid #FFF;
    }
    
    .m-text{
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        grid-template-rows: 5.5rem 2.5rem;
        padding: 0.7rem 0 .7rem .7rem;
    
    }
    
    .m-text p{
        grid-column: 1 / -1;
        margin-bottom: 0;
        color: #AAA;
    }
    
    .m-text button{
        width: 3.5rem;
        height: 2rem;
        color: #FFF;
        border-radius: .5rem;
        border: 2px solid #000;
    }
    
    .b-view{
        grid-column: 12 / 13;
        font-size: 1rem;
        margin-right: .4rem;
    }
    
    .b-edit{
        grid-column: 13 / 14;
        font-size: 1rem;
        position:relative;
        bottom: 20px;
    }
    
    .b-delete{
        grid-column: 14 / 15;
        margin-left: .2rem;
        position:relative;
        bottom: 20px;
    }
    
    .m-text p{
        display: block;
        overflow-wrap: break-word;
        max-width: 100%;
    }
    
    .m-text span:hover{
        cursor: pointer;
        font-weight: bold;
    }
    
    .b-view:hover{
        color: green;
    }
    
    .b-edit:hover{
        color: blue;
    }
    
    .b-delete:hover{
        color: red;
    }
    
    
    /* ====== Meeting Activities ====== */
    .m-activities,
    .m-form{
        grid-column:  3 / span 8;
    }
    
    .m-activities{
        width: 18rem;
        height: auto;
        padding: 1rem;
        border-radius: .2rem;
        background-color: #FFF;
        border: 1.5px solid #DDD;
        margin-top: 1.5rem;
        margin-bottom: 2rem;
        position: fixed;
        top: 6rem;
        left: 50rem;
        z-index: 99;
    }
    
    
    /* ====== Meeting Form ====== */
    .m-form{
        margin-top: 2rem;
    }
    
    .m-form form{
        width: 18rem;
        height: 26.5rem;
        padding: 1rem;
        border-radius: .2rem;
        background-color: #FFF;
        border: 1.5px solid #DDD;
        margin-bottom: 2rem;
        position: fixed;
        z-index: 99;
    }
    
    .form-input input,
    .form-input textarea,
    .form-input select{
        width: 100%;
        height: 1.5rem;
        margin-top: .5rem;
        border: none;
        border-bottom: 1px solid #DDD;
        overflow: hidden;
    }
    
    .form-input input:focus,
    .form-input textarea:focus,
    .form-input select:focus{
        outline: none;
        border-bottom: 2px solid #DDD;
    }
    
    .f-buttons button{
        width: 3.5rem;
        height: 2rem;
        color: #FFF;
        border-radius: .5rem;
    }
    
    .btn-submit{
        background-color: green;
        margin-right: .2rem;
    }
    
    .btn-reset{
        background-color: skyblue;
        color: #000 !important;
        margin-right: .2rem;
    }
    
    .btn-cancel{
        background-color: maroon;
    }
    
    .autocomplete-dropdown-container{
        position: absolute;
        z-index: 99;
        background-color: #FFF;
    }
    
    
    /* ====== Meeting Details View ====== */
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
    }
    
    .details-host p{
        grid-column: 4 / -1;
    }
    
    .m-details-description{
        grid-column: 1 / span 12;
        grid-row: 2 / span 1;
        margin-top: 1rem;
    }

    .m-details-image{
        grid-column: 2/ span 5;
        grid-row: 3 / span 4;
        margin-top: 1rem;
    }
    
    .m-details-description p{
        text-align: justify;
        line-height: 1.2rem;
    }
    
    .m-details-venue{
        grid-column: 1 / span 12;
        grid-row: 3 / span 3;
        padding: 3rem;
        display: grid;
        grid-template-rows: 1fr 1fr;
    }
    
    .m-details-location{
        grid-row: 5 / span 1;
        // background-color: #FFF;
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
    
    /* ====== Comments ====== */
    .comments-list{
        width: 100%;
    }
    
    .comments-list ul{
        list-style: none;
    }
    
    .comments-list li{
        width: 100%;
        height: 6rem;
        box-sizing: border-box;
        padding: .8rem;
        border-radius: .3rem;
        background-color: #FFF;
        margin-bottom: .5px;
    }
    
    .comments-list-item{
        margin-bottom: 0;
    }
    
    .comments-list-item button{
        border: none;
        color: blue;
        font-weight: bold;
        margin-left: 2.6rem;
    }
    
    .c-form{
        padding: 0;
        margin: 0;
    }
    .parent-comment img{
        float: left;
        width: 2rem;
        height: 2rem;
        margin: .5rem 1rem .5rem 0;
    }
    
    .c-form input{
        width: 85%;
        height: 2.5rem;
        margin-top: .8rem;
        border: none;
        overflow: hidden;
    }
    
    .c-form input:focus{
        outline: none;
        border-bottom: 2px solid #DDD;
    }
    
    /* ====== Meeting Attendees ====== */
    .attendees-list ul{
        width: 100%;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
    
    .attendee-item{
        width: 8rem;
        height: 8rem;
        box-sizing: border-box;
        background-color: #FFF;
        border-radius: .8rem;
        border: .5px solid #DDD;
        padding: 1.5rem;
        text-align:center;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
    
    .attendee-item:hover{
        cursor: crosshair;
        box-shadow: .3rem .3rem 2rem .7rem #DDD;
    }
    
    .attendee-item img{
        border-radius: 50%;
        margin-bottom: .5rem;
    }
    
    
    /* ====== Footer ====== */
    .footer{
        grid-column: 1 / -1;
        text-align: center;
        opacity: 0.8;
        background-color: #263B30;
        color: #FFF;
        border-top: .3rem solid #FFF;
    }
    
    
    /* ====== Media Queries ====== */
    @media screen and (max-width: 468px) {
        body{
            font-size: 8px;
        }
        .App{
            display: block;
        }
    
        .meeting-activities{
            display: none;
        }
    }
    
    
    /* Extra small devices (phones, 600px and down) */
    @media screen and (max-width: 600px) {
        body{
            font-size: 70%;
        }
    
        .App{
            display: block;
        }
    
        .meeting-activities{
            display: none;
        }
    }
    
    /* Small devices (portrait tablets and large phones, 600px and up)
    @media screen and (min-width: 600px) {...} */
    
    /* Medium devices (landscape tablets, 768px and up)
    @media screen and (min-width: 768px) {...} */
    
    /* Large devices (laptops/desktops, 992px and up)
    @media screen and (min-width: 992px) {...} */
    `
    const handleDelete = () => {

        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {//send request
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    }


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
        <style>{css}</style>
        <div className="m-details">
            <div className="m-details-banner">
                <div className="details-cal-day">
                    <h4>25 April</h4>
                </div>
                <div className="details-title">
                    <h2>{title || ""}</h2>
                </div>
                <div className="details-host">
                    {/* <img src={hostPhotoURL} alt="host" /> */}
                    <p>Hosted by: <strong>{hostName}</strong></p>
                </div>
                <section className="m-text">
                    <span className="b-edit"><FontAwesomeIcon icon={faPencilAlt} /></span>
                    <span className="b-delete"><FontAwesomeIcon icon={faTrash} onClick={handleDelete} /></span>
                </section>
            </div>
            <img className="m-details-image"
                src={hostPhotoURL}
            />
            <div className="m-details-description">
                <h4>What is it about?</h4>
                <p>{description}</p>
            </div>
            <div className="m-details-venue">
                <div className="m-details-location">
                    <h1>    The event is hosted above, click for directions </h1>
                </div>
                <div className="m-details-map">
                    <LocationMap venue={"59.95"} venueLatLng={"venueLatLng"} />
                </div>
            </div>
            {attendees &&
                <div className="m-details-attendees">
                    <AttendeesList props={attendees} />
                </div>
            }
        </div>
    </>)
}
