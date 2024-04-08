import React from 'react';
import { Link } from 'react-router-dom';
import {
    RssFeed as RssFeedIcon,
    Chat as ChatIcon,
    PlayCircleFilledOutlined as PlayIcon,
    Group as GroupIcon
 
} from '@material-ui/icons';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Divider,
  } from '@material-ui/core';
  import "./sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <List component="nav">
        <ListItem button component={Link} to="/" className="link">
          <ListItemIcon>
            <RssFeedIcon />
          </ListItemIcon>
          <ListItemText primary="Feed" />
        </ListItem>
        <ListItem button component={Link} to="/" className="link">
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="Chats" />
        </ListItem>
        <ListItem button component={Link} to="/" className="link">
          <ListItemIcon>
            <PlayIcon/>
          </ListItemIcon>
          <ListItemText primary="Video" />
        </ListItem>
        <ListItem button component={Link} to="/" className="link">
          <ListItemIcon>
            <GroupIcon/>
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItem>
      </List>
      <Button variant="outlined" className="sidebarButton">
        Show More
      </Button>
      <Divider className="sidebarHr" />
      <List component="nav" className="sidebarFriendList">
        {/* Render your CloseFriend components */}
      </List>
    </div>
  </div>
);
};


export default Sidebar;
