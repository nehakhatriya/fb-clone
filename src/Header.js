import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import  SubscriptionsOutLinedIcon from '@material-ui/icons/SatelliteOutlined'
import  SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import  StoredFrontOutLinedIcon from '@material-ui/icons/StorefrontOutlined'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Header() {
    return (
        <div className="header">
        <div className="header_left">
        <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt=""/>
        <div className="header_input">
        <SearchIcon />
        <input type="text"/>
        </div>
        </div>
        <div className="header_center">
        <div className="header_options">
            <HomeIcon fontSize="large"/>
        </div>
        <div className="header_options">
            <FlagIcon fontSize="large"/>
        </div>
        <div className="header_options">
            <SupervisedUserCircleIcon fontSize="large"/>
        </div>
        <div className="header_options">
            <StoredFrontOutLinedIcon fontSize="large"/>
        </div>
        <div className="header_options">
            <SubscriptionsOutLinedIcon fontSize="large"/>
        </div>
        </div>
        <div className="header_right">
        <div className="header_info">
            <Avatar/>
            <h4>Neha Patel</h4>
            <IconButton>
                <AddIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationActiveIcon/>
            </IconButton>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
        </div>
        </div>
          </div>
    )
}

export default Header

