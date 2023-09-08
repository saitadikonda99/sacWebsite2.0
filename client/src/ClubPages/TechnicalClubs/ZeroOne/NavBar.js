import { Link as Scroll} from 'react-scroll'
import './NavBar.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function NavBar() {

// ----------------------------------------------------------------------------------------------------------------------------------

const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

// ----------------------------------------------------------------------------------------------------------------------------------
  return (
      <div className="clubpage-nav-component">
        <div className="clubpage-nav-component-in">
            <div className="nav-logo">
                <h1>ZeroOne</h1>
                <p>THE CODE CLUB</p>
            </div>
            <div className="nav-details">
              <NavItem to="club-hero-content" text="Home" />
              <NavItem to="club-main-component" text="Know More" />
              <p onClick={handleClickOpen} >Notifications</p>
            </div>
          </div>
          
          <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thanks for visiting our website 😊
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>


      </div>
  )
}

export default NavBar

function NavItem({ to, text }) {
    return (
      <Scroll to={to} smooth={true} duration={10} offset={0}>
        {text}
      </Scroll>
    );
  }