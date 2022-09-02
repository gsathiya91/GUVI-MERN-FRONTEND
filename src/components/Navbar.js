import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Profile from './Profile';

function Navbar() {
    const [value, setValue] = useState();
    return (
        <div>
           <div>
           <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
                <Toolbar>
                    <Tabs
                        sx={{ ml: 'auto' }}
                        textColor="inherit"
                        indicatorColor="primary"
                        value={value}
                        onChange={(e, val) => setValue(val)} >
                        <Tab className="tab"
                            LinkComponent={NavLink} to="/login"
                            label="Logout"
                        />
                    </Tabs>
                </Toolbar>
            </AppBar>
           </div>
            <div>
            <Profile />
        </div>
        </div>
       
    )
}

export default Navbar