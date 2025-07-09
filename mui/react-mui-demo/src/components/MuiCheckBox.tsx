import { BookmarkBorder, CheckBox } from "@mui/icons-material";
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material";
import React, { useState } from 'react'
import { BookmarkOutlined } from "@mui/icons-material";

const MuiCheckBox = () => {
    const [acceptTnc, setAcceptTnc] = useState(false)
    const [skills, setSkills] = useState<string[]>([])
    console.log(acceptTnc)
    console.log(skills)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnc(event.target.checked)
    }
    const handleChangeSkill= (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if(index === -1){
            setSkills([...skills, event.target.value])
        }else{
            setSkills(skills.filter((skill) => skill !== event?.target.value))
        }
    }
  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and condition' control={<Checkbox checked={acceptTnc} onChange={handleChange}/>}/>
        </Box>
        <Box>
            <Checkbox 
                icon={<BookmarkBorder/>}
                checkedIcon={<BookmarkOutlined/>}
                checked={acceptTnc}
                onChange={handleChange}
            />
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skill</FormLabel>
                <FormGroup>
                    <FormControlLabel label='HTML'  control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleChangeSkill}/>} />
                    <FormControlLabel label='CSS' control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleChangeSkill}/>} />
                    <FormControlLabel label='JavaScript'  control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleChangeSkill}/>} />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckBox
