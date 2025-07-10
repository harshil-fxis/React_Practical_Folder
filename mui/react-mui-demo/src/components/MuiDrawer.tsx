import { Box, Drawer, IconButton, Menu, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const MuiDrawer = () => {
    const [isDrawerOpen, setDraweOpen] = useState(false)

  return (
    <>
        <IconButton 
            size='large' 
            edge='start' 
            color='inherit' 
            aria-label='logo' 
            onClick={() => setDraweOpen(true)}>
            <MenuIcon />
        </IconButton>
        <Drawer 
            anchor='left' 
            open={isDrawerOpen} 
            onClose={() => setDraweOpen(false)}
        >
            <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'></Typography>
            </Box>
        </Drawer>
    </>
  )
}

export default MuiDrawer
