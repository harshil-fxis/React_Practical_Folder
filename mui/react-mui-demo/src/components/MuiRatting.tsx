import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material'
const MuiRatting = () => {
    const [value, setValue] = useState<number | null>(null)
    console.log(value)
    const handleChange = (_event: React.ChangeEvent<{}>,
        newValue: number | null
    ) => {
        setValue(newValue)
    }
  return (
    <Stack>
        <Rating value={value} onChange={handleChange} precision={0.5}/>
    </Stack>
  )
}
export default MuiRatting
