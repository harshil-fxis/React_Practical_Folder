import React, { useState } from 'react'
import { Autocomplete, Stack, TextField } from '@mui/material'

type Skill = {
    id: number
    label: string
}

const skills = ['HTML', 'CSS', 'JavaScript', 'React']
const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
}))
const MuiAutoComplete = () => {
    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)
    console.log(skill)
  return (
    <Stack>
        <Autocomplete 
            options={skills} 
            renderInput={(params) => <TextField {...params} label='skills'/>}
            value={value}
            onChange={(event: any, newValue:string | null) => setValue(newValue)}
            freeSolo
        />
        <Autocomplete 
            options={skillsOptions} 
            renderInput={(params) => <TextField {...params} label='skills'/>}
            value={skill}
            onChange={(event: any, newValue:Skill | null) => setSkill(newValue)}
        />
    </Stack>
  )
}

export default MuiAutoComplete
