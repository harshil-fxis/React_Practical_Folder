import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ProfileIcon from '@mui/icons-material/PowerOffOutlined'

const MuiBottomNavBar = () => {
    const [value, setvalue] = useState(0)
  return (
    <BottomNavigation sx={{width: '100%', position:'absolute', bottom: 0}} value={value} onChange={(event, newValue) => setvalue(newValue)}>
        <BottomNavigationAction label = 'Home' icon={<HomeIcon />}/>
        <BottomNavigationAction label = 'Favorties' icon={<FavoriteIcon />}/>
        <BottomNavigationAction label = 'Profile' icon={<ProfileIcon />}/>
    </BottomNavigation>
  )
}

export default MuiBottomNavBar
