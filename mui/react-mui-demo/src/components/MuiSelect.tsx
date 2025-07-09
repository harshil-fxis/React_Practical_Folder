import React, { useState } from 'react'
import { Box, MenuItem, TextField } from '@mui/material'

const MuiSelect = () => {
    const [country, setCountry] = useState('')
    const [countries, setCountries] = useState<string[]>([])
    console.log({country})
    console.log({countries})
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
    const handleChangeC = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(','): value)
    }
  return (
    <div>
      <Box width='250px'>
        <TextField label='select country' select value={country} onChange={handleChange} fullWidth>
            <MenuItem value='In'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
      </Box>
      <Box width='250px'>
        <TextField label='select country' select value={countries} onChange={handleChangeC} fullWidth SelectProps={{multiple: true}} size='small' placeholder='please select your country' color='primary' error>
            <MenuItem value='In'>India</MenuItem> 
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
      </Box>
    </div>
  )
}

export default MuiSelect
