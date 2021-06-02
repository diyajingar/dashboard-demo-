import React from 'react'
import {Inject, ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule'
export default function Scheduler() {
    return (
        <div>
            <ScheduleComponent >
            <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
                </ScheduleComponent>
        </div>
    )
}
