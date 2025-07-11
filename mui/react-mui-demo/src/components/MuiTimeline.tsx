import { Timeline } from '@mui/icons-material'
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import React from 'react'

const MuiTimeline = () => {
  return (
    <Timeline fontSize='large'>
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
                9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Ahmedabad</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
                10:40 am
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Gandhinagar</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
                12:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Vadodra</TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}

export default MuiTimeline
