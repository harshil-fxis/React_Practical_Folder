import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import EditIcon from '@mui/icons-material/Edit'

const MuiSpeedDial = () => {
  return (
    <SpeedDial
        ariaLabel='Navigation Speed dial'
        sx={{position: 'absolute', bottom: 16, right:16}}
        icon={<SpeedDialIcon />}
    >
        <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' tooltipOpen />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' tooltipOpen />
        <SpeedDialAction icon={<EditIcon />} tooltipTitle='Edit' tooltipOpen />
    </SpeedDial>
  )
}

export default MuiSpeedDial
