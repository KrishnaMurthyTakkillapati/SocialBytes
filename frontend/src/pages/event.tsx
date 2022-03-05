import { useParams } from "react-router-dom";
import { Grid } from '@mui/material';
import eventInfo from '../lib/eventpage.json'
import EventCard from "../utils/EventCard";

export const EventPage = () => {
    const { id }: { id: string } = useParams();

    return (<>
        <Grid container spacing={5}>
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
        </Grid>
    </>)
}
