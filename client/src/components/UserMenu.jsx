import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Menu, MenuItem, Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function UserMenu() {
    const { user: { displayName, photoURL, auth } } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    // console.log({ user });

    const handleLogout = () => {
        auth.signOut();
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    return (
        <>
            <Box sx={{ display: 'flex' }} onClick={handleClick}>
                <Typography>{displayName}</Typography>
                <Avatar alt="avatar" src={photoURL} sx={{ width: '24px', height: '24px', marginLeft: '5px' }} />
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}