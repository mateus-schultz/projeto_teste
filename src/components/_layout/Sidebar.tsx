import React from 'react';
import { Drawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    MoveToInbox as InboxIcon,
    Mail as MailIcon
} from '@mui/icons-material'
import { Link } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

interface Props {
    open: boolean;
    handleDrawerClose: () => void;
}

const drawerWidth = 240;

const Sidebar: React.FC<Props> = ({ open, handleDrawerClose }) => {
    const theme = useTheme();
    const items = [
        { name: 'Home', link: '/' },
        { name: 'Dashboard', link: '/dashboard'}
    ];

    return (
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {items.map((obj, index) => (
                    <Link key={obj.name} to={obj.link}>
                        <ListItem button>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={obj.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    )
};

export default Sidebar;
