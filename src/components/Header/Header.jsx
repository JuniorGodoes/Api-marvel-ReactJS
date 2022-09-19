import * as React from 'react';
import TextField from '@mui/material/TextField';
import './Header.css'

const Header = () => {

  return (
    <div className="toolbar">
        <h3>API-Marvel React</h3>
    
        <TextField
          label="Hero name"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
    </div>
  )
};

export default Header;

