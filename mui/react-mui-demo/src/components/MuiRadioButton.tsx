import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material";
import React, { useState } from 'react'

const MuiRadioButton = () => {
    const [value, setValue] = useState('')
    console.log({value})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
  return (
    <Box>
        <FormControl error>
            <FormLabel id='job-experience-group-label'>Years of experience</FormLabel>
            <RadioGroup name="job-experience-group" aria-labelledby="job-experience-group-label" value={value} onChange={handleChange}>
                <FormControlLabel control={<Radio color="secondary"/>} label='0-2' value='0-2'/>
                <FormControlLabel control={<Radio size="small"/>} label='3-5' value='3-5'/>
                <FormControlLabel control={<Radio/>} label='6-10' value='6-10'/>
            </RadioGroup>
            <FormHelperText>Invalid seletion</FormHelperText>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton
