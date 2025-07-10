import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

const MuiLink = () => {
  return (
    <Stack spacing={2} direction={'row'} m={4}>
        <Link href='#'>Link</Link>
        <Typography>
            <Link href='#' color='secondary' underline='hover'>Secondary</Link>
        </Typography>
    </Stack>
  )
}

export default MuiLink
