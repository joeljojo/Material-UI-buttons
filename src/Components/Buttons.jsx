import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

// import theme from "./Theme";
const Buttons = () => {
  return (
      <>
    {/* // <ThemeProvider theme={theme}> */}
      <Button variant="text" color="primary" size="small" sx={{color:
      'red'}}>
        Primary
      </Button>
      <Button variant="outlined" color="secondary" size="small">
        Secondary
      </Button>
      <Button variant="contained" href="#" color="success" size="medium">
        Jojo solo
      </Button>
      <Button variant="outlined" size="medium">Success</Button>
      <Button variant="outlined" color="error" size="large">
        Error
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon/>}>Delete</Button>
      <Button variant="outlined" endIcon={<SendIcon/>}>Send</Button>
      </>
    // </ThemeProvider>
  );
};

export default Buttons;
