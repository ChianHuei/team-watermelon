import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    }
  }));


const Navbar = ()=>{
    const classes = useStyles();

    return(
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                <LocalMallIcon color="Primary"/> BigDeal
            </Typography>
            <nav>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Shopping Lists
                </Link>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Friends
                </Link>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Notifications
                </Link>
            </nav>
            <Button href="#" color="primary" variant="outlined" className={classes.link}>
                Login
            </Button>
            </Toolbar>
        </AppBar>
    )


}


export default Navbar;