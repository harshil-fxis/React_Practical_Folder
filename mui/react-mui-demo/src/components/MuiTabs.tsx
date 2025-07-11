import { Favorite, HomeFilled, Search } from '@mui/icons-material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React, { useState } from 'react'

const MuiTabs = () => {
    const [value, setValue] = useState('1')
    const handleCahnge = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }
  return (
    <Box>
        <TabContext value={value}>
            <Box sx={{borderBottom: 1, borderColor: 'divider' , width: '500px'}}>
                <TabList 
                    aria-label='Tabs example' 
                    onChange={handleCahnge} 
                    textColor='secondary' 
                    indicatorColor='secondary' 
                    variant='scrollable'
                    scrollButtons='auto'
                    centered>
                        <Tab label='Tab One' value='1' icon={<Favorite />} iconPosition='start'/>
                        <Tab label='Tab Two' value='2' icon={<HomeFilled />} iconPosition='end' disabled/>
                        <Tab label='Tab Three' value='3' icon={<Search />} iconPosition='start'/>
                        <Tab label='Tab One' value='4' icon={<Favorite />} iconPosition='start'/>
                        <Tab label='Tab Two' value='5' icon={<HomeFilled />} iconPosition='end' disabled/>
                        <Tab label='Tab Three' value='6' icon={<Search />} iconPosition='start'/>
                </TabList>
            </Box>
            <TabPanel value='1'>Panel one</TabPanel>
            <TabPanel value='2'>Panel two</TabPanel>
            <TabPanel value='3'>Panel three</TabPanel>
            <TabPanel value='4'>Panel one</TabPanel>
            <TabPanel value='5'>Panel two</TabPanel>
            <TabPanel value='6'>Panel three</TabPanel>
        </TabContext>
    </Box>
  )
}

export default MuiTabs
