import { Box, Breadcrumbs, Link } from '@mui/material'
import React from 'react'

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' separator='/' maxItems={2} itemsAfterCollapse={2} itemsBeforeCollapse={2}>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Link color='text.primary' underline='none'>Shoes</Link>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs
