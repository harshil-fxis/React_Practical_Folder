import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail'

const MuiList = () => {
  return (
    <Box sx={{width:'400px', bgcolor: 'primary.light'}}>
        <List>
            <ListItem>
                <ListItemIcon>
                    <MailIcon/>
                </ListItemIcon>
                <ListItemText primary='List item 1' secondary='secondary text'/> 
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <MailIcon/>
                </ListItemIcon>
                <ListItemText primary='List item 2' secondary='secondary text'/> 
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <MailIcon/>
                </ListItemIcon>
                <ListItemText primary='List item 3' secondary='secondary text'/> 
            </ListItem>
        </List>
    </Box>
  )
}

export default MuiList
