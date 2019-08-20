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

import Note from './Note';
import Reply from './Reply';
import SimpleNote from './Note_Simple';
import axios from 'axios';
import { NoteDrawerMain } from '.';

const InnerWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const drawerWidth = 480;

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
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
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
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function PersistentDrawerRight({ page = null }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        TEST
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

                    <Note
                        timestamp="987654321"
                        title="저는 학점을 잘 줍니다."
                        content="Greyhound divisively hello coldly wonderfully marginally in a far far away galaxy.">
                        <Reply timestamp="123456789"
                            content="최고의 강의입니다. 추천하고싶네요. 값 싸게 산 책인데도 강의 내용이 만족스럽습니다.
                            학점을 매우 엄정하게 주셔서 맘에 드네요. 너무 맘에 들어서 다음 학기에 또 들으러 와야해요^^;" />
                        <Reply timestamp="98123456789"
                            content="수학과학생들이 소위최상위권 대학원인 서카포에 지원한다면 이책으로 공부하는것이
                            바람직하다고 생각하네요. Group, symmetric group, linear group중에 classical group들의
                            관계를 옅게나마 서술해주셔서 풍부했습니다. Basic Algebra 읽기전에 추천해요." />
                        <Reply timestamp="990123456789"
                            content="국내 인공지능 관련 커뮤니티 현업 종사자님들이 추천해주신 아주 유용한 책입니다.
                            커넥트 재단의 선형대수 강의와 함께 보면 이해안되는 부분이 많이 풀릴 거에요. 참고하세요~" />
                    </Note>
                </div>
            </Drawer>
        </div>
    );
}