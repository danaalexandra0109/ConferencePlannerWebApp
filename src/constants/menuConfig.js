import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import EventIcon from '@mui/icons-material/Event'
import InfoIcon from '@mui/icons-material/Info'
import DescriptionIcon from '@mui/icons-material/Description'
import WorkIcon from '@mui/icons-material/Work'

const menuItems = [
  { icon: <HomeIcon />, text: 'NavBar.Welcome', path: '/welcome', name: 'Welcome' },
  { icon: <EventIcon />, text: 'NavBar.Conferences', path: '/conferences', name: 'Conferences' },
  { icon: <DescriptionIcon />, text: 'NavBar.Notes', path: '/notes', name: 'Notes' },
  { icon: <InfoIcon />, text: 'NavBar.About', path: '/about', name: 'About' },
  { icon: <WorkIcon />, text: 'NavBar.Departments', path: '/departments', name: 'Departments' }
]

export default menuItems
