import { Badge, Stack } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail'
const MuiBadge = () => {
  return (
    <div>
        <div>
            <br/><br/><br/>
            <Stack spacing={10} direction={'row'}>
                <Badge badgeContent={5} color='primary'>
                    <MailIcon/>
                </Badge>
                <Badge badgeContent={0} showZero color='secondary'>
                    <MailIcon/>
                </Badge>
                <Badge badgeContent={100} color='secondary'>
                    <MailIcon/>
                </Badge>
                <Badge badgeContent={100} max={999} color='secondary'>
                    <MailIcon/>
                </Badge>
                <Badge badgeContent={100} invisible={true} color='secondary'>
                    <MailIcon/>
                </Badge>
                
                
            </Stack>
        </div>
    </div>
  )
}

export default MuiBadge
