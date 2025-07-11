import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },3000)
    }, [])

  return (
    <>
        <Stack spacing={2} width='250px'>
            <Skeleton />
            <Skeleton variant='text' animation='wave' />
            <Skeleton variant='circular' width='40px' height='40px' />
            <Skeleton variant='rectangular' width='240px' height='140px' />
        </Stack>
        <Box sx={{ width: '250px'}}>
            {
                loading ? (
                    <Skeleton variant='rectangular' width={256} height={144} animation='wave'/>
                ): (
                    <img src='https://source.unsplash.com/random/256x144' alt='skeleton' width={256} height={144}/>
                )
            }
            <Stack direction={'row'} spacing={1} sx={{width:'100%', marginTop:'12px'}}>
                {
                    loading ? (
                        <Skeleton variant='circular' width={40} height={40} animation='wave'/>
                    ): (
                        <Avatar>H</Avatar>
                    )
                }
                <Stack sx={{width:'80%'}}>
                    {
                        loading ? (
                            <>
                                <Typography variant='body1'>
                                    <Skeleton variant='text' width='100%' animation='wave'/>
                                </Typography>
                            </>
                        ): (
                            <>
                                <Typography variant='body1'>React MUI Tutorial</Typography>
                            </>
                        )
                    }
                </Stack>
            </Stack>
        </Box>
    </>
  )
}

export default MuiSkeleton
