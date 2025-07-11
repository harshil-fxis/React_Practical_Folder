import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'
import React from 'react'

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction={'row'}>
        <LoadingButton variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading variant='outlined'>Submit</LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton
