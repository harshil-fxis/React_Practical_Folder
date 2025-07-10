import { Avatar, AvatarGroup, Stack } from '@mui/material'
import React from 'react'

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor: 'primary.light' }}>HV</Avatar>
            <Avatar sx={{bgcolor: 'success.light' }}>HV</Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>
            <AvatarGroup max={3}>
                <Avatar sx={{bgcolor: 'primary.light' }}>HV</Avatar>
                <Avatar sx={{bgcolor: 'success.light' }}>HV</Avatar>
                <Avatar sx={{bgcolor: 'primary.light' }}>HV</Avatar>
                <Avatar sx={{bgcolor: 'success.light' }}>HV</Avatar>
            </AvatarGroup>
        </Stack>
    </Stack>
  )
}

export default MuiAvatar
