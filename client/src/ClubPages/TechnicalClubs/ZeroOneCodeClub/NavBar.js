import { Link as Scroll} from 'react-scroll'
import './NavBar.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import deepakimg from '../../../Assets/CouncilMembers/DP.jpg'


function NavBar() {

// ----------------------------------------------------------------------------------------------------------------------------------

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

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
  
          <div>
  <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
    <DialogContent dividers>
      <table className="custom-table">
        <thead>
          <tr className="table-header">
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Year</th>
          </tr>
        </thead>
            <tbody>
              <tr className="table-row">
                <td>
                  <div className="table-cell">
                    <img className='club-image' src={deepakimg} alt="" />
                    <span>Deepak Reddy Gathpa</span>
                  </div>
                </td>
                <td>Lead</td>
                <td>CSE</td>
                <td>3rd</td>
              </tr>
            </tbody>

            <tbody>
          <tr className="table-row">
            <td>
              <div className="table-cell">
                <img className='club-image' src={deepakimg} alt="" />
                <span>Deepak Reddy Gathpa</span>
              </div>
            </td>
            <td>Lead</td>
            <td>CSE</td>
            <td>3rd</td>
          </tr>
        </tbody>

        <tbody>
          <tr className="table-row">
            <td>
              <div className="table-cell">
                <img className='club-image' src={deepakimg} alt="" />
                <span>Deepak Reddy Gathpa</span>
              </div>
            </td>
            <td>Lead</td>
            <td>CSE</td>
            <td>3rd</td>
          </tr>
        </tbody>

        <tbody>
          <tr className="table-row">
            <td>
              <div className="table-cell">
                <img className='club-image' src={deepakimg} alt="" />
                <span>Deepak Reddy Gathpa</span>
              </div>
            </td>
            <td>Lead</td>
            <td>CSE</td>
            <td>3rd</td>
          </tr>
        </tbody>

        <tbody>
          <tr className="table-row last-row-name">
            <td>
              <div className="table-cell">
                <img className='club-image' src={deepakimg} alt="" />
                <span>Deepak Reddy Gathpa</span>
              </div>
            </td>
            <td>Lead</td>
            <td>CSE</td>
            <td>3rd</td>
          </tr>
        </tbody>

        
      </table>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={handleClose}>
        Exit
      </Button>
    </DialogActions>
  </BootstrapDialog>
</div>

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