import { Box, Divider, Grid, Paper, Stack } from '@mui/material'
import React from 'react'

const MuiBox = () => {
  return (
    <Paper sx={{padding: '32px', margin:'30px', backgroundColor:'yellow'}} elevation={10}>
    <Stack sx={{border: '1px solid'}} direction='column' spacing={0} divider={<Divider orientation='vertical' flexItem/>}>
        <Box sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
                backgroundColor: 'primari.light',
            },
            ":hover": {
                backgroundColor: 'primari.light',
            }, 
        }}>
            Harshil Vaja
        </Box>
        <Box display='flex' height='100px' width='100px' bgcolor='purple' p='10px'>

        </Box>
    </Stack>
    <Grid container my={4}>
        <Grid>
            <Box bgcolor='primary.light' p={2}>
                Item 1
            </Box>
        </Grid>
        <Grid >
            <Box bgcolor='primary.light' p={2}>
                Item 2
            </Box>
        </Grid>
        <Grid >
            <Box bgcolor='primary.light' p={2}>
                Item 3
            </Box>
        </Grid>
        <Grid >
            <Box bgcolor='primary.light' p={2}>
                Item 4
            </Box>
        </Grid>
    </Grid>
    </Paper>
  )
}

export default MuiBox
