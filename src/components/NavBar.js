import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { TextField, IconButton, Typography, Toolbar, AppBar, MenuItem, Menu } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import OpenBusinessCard from './OpenBusinessCard';

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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(2),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
        padding: theme.spacing(0,0,0,6)
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        transition: theme.transitions.create('width'), 
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    }
}));

export default function NavBar({ header, contactInfo}) { //pass title of page as header 
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
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        {/* <InputBase
                            placeholder="Search.."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }} /> */}
                        <Autocomplete
                            onChange={(event, value) => console.log(value)} //do something with selected value
                            id="searchBar"
                            freeSolo
                            className={classes.inputRoot}
                            options={contactInfo.map(contact=> contact.name)}
                            renderInput={params => (
                                <TextField {...params}  className={classes.inputInput} />

                            )}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
