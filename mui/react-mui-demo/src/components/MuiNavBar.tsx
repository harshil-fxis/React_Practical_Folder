import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material'
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { setEmitFlags } from 'typescript'

const MuiNavBar = () => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <CatchingPokemon/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                POKEMONAPP
            </Typography>
            <Stack direction={'row'} spacing={2}>
                <Button color='inherit'>Features</Button>
                <Button color='inherit'>Pricing</Button>
                <Button color='inherit'>About</Button>
                <Button 
                    color='inherit' 
                    id='resources-button' 
                    onClick={handleClick} 
                    aria-controls={open ? 'resources-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    endIcon={<KeyboardArrowDown />} 
                >Resources</Button>
                <Button color='inherit'>Login</Button>
            </Stack>
            <Menu id='resources-menu' anchorEl={anchorEl} open={open} MenuListProps={{
                'aria-labelledby': 'resources-button',
            }}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            >
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavBar
