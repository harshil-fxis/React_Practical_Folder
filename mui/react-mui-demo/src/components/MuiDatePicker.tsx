import { DatePicker } from '@mui/lab'
import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const MuiDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    console.log({selectedDate})
  return (
    <Stack spacing={4} sx={{width: '250px'}}>
        <DatePicker label='Date Picker'></DatePicker>
        <DatePicker 
            label='Date Picker' 
            // renderInput={(params) => <TextField {...params}/>}
            value={selectedDate}
            // onChange={(newValue) => {
            //     setSelectedDate(newValue)
            // }}
        />
    </Stack>
  )
}

export default MuiDatePicker
