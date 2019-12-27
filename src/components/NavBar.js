import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { InputBase, IconButton, Typography, Toolbar, AppBar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({ //use this to format indivdual components 
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    }
}));

export default function NavBar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} color="inherit"> 
                        Contact List
                </Typography>
                    <InputBase
                    placeholder="Search" /> 
                </Toolbar>  
            </AppBar>
        </div>
    )
}
