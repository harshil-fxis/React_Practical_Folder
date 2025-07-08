import React, { useState } from 'react'
import {Stack, Button, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import { ImBold } from "react-icons/im";
import { FaItalic } from "react-icons/fa";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';



const MuiButton = () => {
    const [format, setformate] = useState<String[]>([])
    const fonthandlechange = (_event: React.MouseEvent<HTMLElement>, updatedFormates: string[]) => {
        setformate(updatedFormates)
    }
    console.log({format,})

  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction={'row'}>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        </Stack>
    

        <Stack spacing={2} direction={'row'}>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>

        <Stack display="block" spacing={2} direction={'row'}>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>
        <Stack direction={'row'}>
            <ButtonGroup variant='contained' orientation='vertical'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction={'row'}>
            <ToggleButtonGroup aria-label='text formatin' value={format} onChange={fonthandlechange} color='success' size='small'>
                <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
                <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
                <ToggleButton value='underline' aria-label='underline'><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
    
  )
}

export default MuiButton

