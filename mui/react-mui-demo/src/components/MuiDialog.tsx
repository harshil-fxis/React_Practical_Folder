import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

const MuiDialog = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>Submit the tset?</DialogTitle>
            <DialogContent>
                <DialogContentText id='doalog-descrition'>
                    Are you sure you want to submit the test? you will not be able to edit after submitting.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancle</Button>
                <Button onClick={() => setOpen(false)}>Submit</Button>
                
            </DialogActions>
        </Dialog>
    </>
  )
}

export default MuiDialog
