import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/layout/modules/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity:()=> void;
    editMode: boolean;
    openForm: (id: string) =>  void;
    closeForm: () => void;
}

export default function ActivityDashboard({activities, selectActivity, selectedActivity,cancelSelectActivity,editMode, openForm, closeForm}: Props){
    return(
        <Grid>
            <Grid.Column width="10">
                <ActivityList activities={activities} selectActivity={selectActivity}></ActivityList>
            </Grid.Column>
            <Grid.Column width="6">
                {selectedActivity && !editMode &&
                <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} openForm={openForm}></ActivityDetails>}
                {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity}></ActivityForm>}
            </Grid.Column>
        </Grid>
    )
}