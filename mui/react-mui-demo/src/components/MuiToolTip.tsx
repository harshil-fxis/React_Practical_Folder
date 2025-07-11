import DeleteIcon from '@mui/icons-material/DeleteOutline'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

const MuiToolTip = () => {
  return (
    <Tooltip title='Delete' placement='right' arrow enterDelay={500} leaveDelay={200} >
        <IconButton>
            <DeleteIcon/>
        </IconButton>
    </Tooltip>
  )
}

export default MuiToolTip
