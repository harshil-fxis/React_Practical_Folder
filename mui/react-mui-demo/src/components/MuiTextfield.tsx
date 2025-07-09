import React, { useState } from 'react'
import { Stack, TextField } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';

const MuiTextfield = () => {
  const [value, setValue] = useState('')
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
        <TextField label='Form Input' required value={value} onChange={(e) => setValue(e.target.value)} error={!value} helperText={!value ? "Required" : "Do not share your password"} />
        <TextField label='password' type='password' disabled helperText='Do not share you password!' />
        <TextField label='Form Input' InputProps={{readOnly: true}} />
      </Stack>
      <Stack direction={'row'} spacing={2}>
        <TextField label='Form Input' InputProps={{startAdornment: '$'}} />
        <TextField label='Form Input' InputProps={{endAdornment: 'kg'}} />
      </Stack>
    </Stack>
  )
}

export default MuiTextfield
