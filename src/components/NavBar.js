import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Typography, Toolbar, AppBar, MenuItem, Menu } from '@material-ui/core';



const useStyles = makeStyles(theme => ({ //use this to format indivdual components 
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        backgroundColor: theme.palette.grey[700]
    },
    title: {
        flexGrow: 1
    },
}));

export default function NavBar({ header, contactInfo }) { //pass title of page as header 
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => { //when menu clicked do something
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar className={classes.appBar} position="static" >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem component={Link} to="/"> Home</MenuItem>
                        <MenuItem component={Link} to="/reports"> Reports</MenuItem>
                    </Menu>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        {header}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
