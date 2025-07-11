import { Avatar, Chip, Stack } from '@mui/material'
import React, { useState } from 'react'

const MuiChip = () => {
    const [chips, setChips] = useState(['chip 1', 'chip 2', 'chip 3'])
    const handleDelete = (chipToDelete: string) => {
        setChips((chips) => chips.filter((chip) => chip !== chipToDelete))
    }
  return (
    <Stack spacing={2} direction={'row'}>
        <Chip label='chip' color='primary' sx={{width:'100px'}} />
        <Chip label='chip outline' sx={{width:'150px'}} avatar={<Avatar>H</Avatar>} color='secondary' />
        <Chip label='delete' sx={{width:'100px'}} color='error' onClick={() => alert('clicked')} onDelete={() => alert('delete handler called')} />
        {chips.map(chip => (
            <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>
        ))}
    </Stack>
  )
}

export default MuiChip
