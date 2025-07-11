import { Alert, AlertProps, Button, Snackbar } from '@mui/material'
import React, { forwardRef, useState } from 'react'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref){
        return <Alert elevation={6} ref={ref} {...props}/>
    }
)

const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)
    const handleChange = (event? : React.SyntheticEvent | Event, reason?: string) => {
        if (reason == 'clickaway'){
            return
        }
        setOpen(false)
    }
  return (
    <>
        <Button onClick={() => setOpen(true)}>Submit</Button>
        {/* <Snackbar message='Form submited successfully' autoHideDuration={4000} open={open} onClose={handleChange} anchorOrigin={{ vertical:'bottom', horizontal: 'center'}}></Snackbar> */}
        <Snackbar autoHideDuration={6000} open={open} onClose={handleChange} >
            <SnackbarAlert onClose={handleChange} severity='success'>
                Form submited successfully!
            </SnackbarAlert>
        </Snackbar>
    </>
  )
}

export default MuiSnackbar
