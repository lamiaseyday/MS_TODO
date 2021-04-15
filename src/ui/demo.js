
//Gerekli paketler projeye dahil ediliyor.
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";

const drawerWidth = 240;
const fontS = 5;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: "#0F053C"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    background: "#F4F4F4",
    border: 'none'
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1
    },
    background: "#F4F4F4",
    border: 'none'
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  listItemDay: {
    "&:hover": {
      background: "white"
    },
    "&:focus": {
      color: "#000000"
    }
    
  },
  listItemDayIcon: {
    color: "#0F053C"
  },
  listItemImportant: {
    "&:hover": {
      background: "white"
    },
    "&:focus": {
      color: "#FE6B8B"
    }
  },
  listItemImportantIcon: {
    color: "#0F053C"
  },
  listItemPlan: {
    "&:hover": {
      background: "white"
    },
    "&:focus": {
      color: "#FE6B8B"
    }
  },
  listItemPlanIcon: {
    color: "#0F053C"
  },
  listItemPerson: {
    "&:hover": {
      background: "white"
    },
    "&:focus": {
      color: "#9E035C"
    }
  },
  listItemPersonIcon: {
      color: "#9E035C"
  },
  listItemTask: {
    "&:hover": {
      background: "white"
    },
    "&:focus": {
      color: "#9E035C"
    }
  },
  listItemTaskIcon: {
    color: "#9E035C"
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            To Do
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            className={classes.listItemDay}
            onClick={handleClickListItem}
            button
            component="a"
            href="/"
          >
            <ListItemIcon>
              <Brightness5Icon className={classes.listItemDayIcon}/>
            </ListItemIcon>
            <ListItemText primary="Günüm" />
          </ListItem>
          <ListItem className={classes.listItemImportant} button>
            <ListItemIcon>
              <StarOutlineIcon className={classes.listItemImportantIcon}/>
            </ListItemIcon>
            <ListItemText primary="Önemli" />
          </ListItem>
          <ListItem className={classes.listItemPlan} button
          component="a"
          href="/plan">
            <ListItemIcon>
              <DateRangeIcon className={classes.listItemPlanIcon} />
            </ListItemIcon>
            <ListItemText primary="Planlanan" />
          </ListItem>
          <ListItem className={classes.listItemPerson} button>
            <ListItemIcon>
              <PersonIcon className={classes.listItemPersonIcon} button/>
            </ListItemIcon>
            <ListItemText primary="Size Atananlar" />
          </ListItem>
          <ListItem className={classes.listItemTask} button>
            <ListItemIcon>
              <HomeIcon className={classes.listItemTaskIcon}/>
            </ListItemIcon>
            <ListItemText primary="Görevler" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
