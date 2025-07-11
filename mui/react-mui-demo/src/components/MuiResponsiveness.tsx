import { Box } from '@mui/material'
import React from 'react'

const MuiResponsiveness = () => {
  return (
    <Box sx={{ width: {
        xs:100,
        sm:200,
        md:300,
        lg:400,
        xl:500,
    }, color:'red', bgcolor: 'error', height: 300}
    }>
        hello
    </Box>
  )
}

export default MuiResponsiveness
