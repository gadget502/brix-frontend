import React, { Component } from 'react';
import styled from 'styled-components';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from './Modal';
import TextField from '@material-ui/core/TextField';
import './modal.css';

import Note from './Note';
import Reply from './Reply';
import SimpleNote from './Note_Simple';
import axios from 'axios';
import { NoteDrawerMain } from '.';
import { Icon } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const InnerWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

//const drawerWidth = 480;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    //width: `calc(100% - ${drawerWidth}px)`,
    width: `calc(100% - 40%)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    //marginRight: drawerWidth,
    marginRight: '40%'
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    //width: drawerWidth,
    width: '40%',
    flexShrink: 0,
  },
  drawerPaper: {
    //width: drawerWidth,
    width: '40%'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    //marginRight: -drawerWidth,
    marginRight: '-40%'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const fab_style = {
  fab: {
    position: 'fixed',
    bottom: '36px',
    right: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '56px',
    height: '56px',
    backgroundColor: '#1976d2',
    borderRadius: '28px',
    boxShadow:
      '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
  },
};

const modalStyle = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};


export default function PersistentDrawerRight({ page = null, title = '' }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [isShowModal, setIsShowModal] = React.useState(false);
  const [note, setNote] = React.useState('');

  function requestAddnote(noteValue) {
    const data = {
      paragraphId: '1.1_reductions',
      content: noteValue,
      start: 'a',
      end: 'a',
      parentId: ''
    };

    axios.post('http://13.124.213.75:3000/api/comment/', {
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      ...data
    });
  }

  function addNote(noteValue) {
    requestAddnote(noteValue);
    setNote('');
    setIsShowModal(false);
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  function handleGoBack() {
    window.history.back();
  }

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleGoBack}
            >
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
              {title}
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <InnerWrap>
            {page}
          </InnerWrap>
        </main>
        <div onClick={(event) => { event.stopPropagation(); setIsShowModal(true); }} style={fab_style.fab}>
          <AddIcon color="default" />
        </div>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <div style={{ overflowY: 'scroll' }}>
            <NoteDrawerMain />
          </div>
        </Drawer>
        <Modal
          overlayClassName="NoteModalOverlay"
          className="EventReceiptModalContent"
          style={modalStyle}
          isOpen={isShowModal}
          onRequestClose={() => { setIsShowModal(false) }}
        >
          <div
            style={{
              width: '66vw',
              height: '30vh',
              backgroundColor: 'white',
              padding: '16px 22px',
              borderRadius: '10px',
              position: 'relative'
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '1.4em' }}>노트 입력</div>
            <TextField
              style={{ width: '100%', marginTop: '16px' }}
              label="Note"
              multiline
              rows="6"
              rowsMax="6"
              defaultValue="여기에 노트를 입력해주세요"
              value={note}
              variant="outlined"
              multiline
              onChange={e => setNote(e.target.value)}
            />
            <button onClick={() => { addNote(note) }} style={{ position: 'absolute', bottom: '16px', width: 'calc(100% - 44px)', height: '36px', backgroundColor: '#3f51b5', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: '16px', borderRadius: '28px' }}>노트입력</button>
          </div>
        </Modal>
      </div>
    </>
  );
}