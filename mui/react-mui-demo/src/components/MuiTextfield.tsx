import React from 'react'
import { Stack, TextField } from '@mui/material'

const MuiTextfield = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={'row'}>
        <TextField label='Name' variant='outlined'/>
        <TextField label='Name' variant='filled'/>
        <TextField label='Name' variant='standard'/>
      </Stack>
      <Stack direction={'row'} spacing={2}>
        <TextField label='Form Input' size='small' />
      </Stack>
      <Stack direction={'row'} spacing={2}>
        <TextField label='Form Input' required />
        <TextField label='password' type='password' disabled helperText='Do not share you password!' />
        <TextField label='Form Input' InputProps={{readOnly: true}} />
      </Stack>
    </Stack>
  )
}

export default MuiTextfield
