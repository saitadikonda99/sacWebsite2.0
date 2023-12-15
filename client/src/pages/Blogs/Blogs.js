import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
import './MobileView.css'
import'../../components/HomeNav/HomeNav.css';
import NavBar from './NavBar';




//images for blog cards
import blogimg from '../../Assets/BlogCard.png'
import Footer from '../../components/home/Footer/Footer';

const images = [
    {
        src : blogimg,
        time: 'October 13',
        title : 'Outerbase Hackathon',
        matter: 'Build apps with Outerbase and stand a chance to win up to $5K and amazing swag!',
        category: 'Architect Design',
    },
    {
        src: 'https://picsum.photos/350/250/?image=232',
        time: '2 days ago',
        category: 'Cinematic',
    },
    {
        src: 'https://picsum.photos/350/250/?image=431',
        time: '2 days ago',
        category: 'Composite',
    },
];

function Blogs() {



    useEffect(() => {
        document.title = 'Blogs | KLU SAC';
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Student Activity Center at KLEF';
        document.head.appendChild(metaDescription);
    
        return () => {
          document.head.removeChild(metaDescription);
        };
      }, []);


      //   ---------------------------------------------

      const [screenWidth, setScreenWidth] = useState(window.innerWidth);

      const handleResize = () => {
          setScreenWidth(window.innerWidth);
      };

      useEffect(() => {
          window.addEventListener('resize', handleResize);

          return () => {
          window.removeEventListener('resize', handleResize);
          };
      }, []);

     //   ---------------------------------------------

    

  return (
    <div className="BlogsComponent">
        <div className="BlogsContainer">
        <div className="Event-Nav">
            <div className='HomeNavComponent'>
                <div className="HomeNavContainer">
                    <div className="HomeNavLogo">
                        <div className="HomeNavLogo-in">
                            <Link className='HomeNavLogo-in-link' to='/'><h1>Student Activity Center</h1></Link>
                        </div>
                    </div>
                    <div className="HomeNavIndex">
                        <div className="HomeNavIndex-in">
                            <Link className='HomeNavIndex-in-link' to='/'>Back to Home</Link>
                            <Link className='HomeNavIndex-in-link' to='/'>Explore Clubs</Link>
                            <Link className='HomeNavIndex-in-link' to='/gallery'>Gallery</Link>
                            <Link className='HomeNavIndex-in-link' to='/events'>Events</Link>
                        </div>
                    </div>
                </div>
            </div>
                {screenWidth < 768 ?  <NavBar/> : '' }
        </div>
            <div className="BlogsContainer-in">
                <div className="BlogsContainer-one">
                    <div className="BlogsSideBar">
                       <div className="SideBarOne">
                            <SideBar />
                       </div>
                        <div className="SideBarTwo">
                            <NewSideBar />

                        </div>
                    </div>
                </div>
                <div className="BlogsContainer-two">
                    <div className="BlogsContainer-main">
                        <div className="BlogsContainer-main-in">
                            <BlogCard images={images[0]} />
                            <BlogCard images={images[0]} />
                            <BlogCard images={images[0]} />
                            <BlogCard images={images[0]} />
                            <BlogCard images={images[0]} />
                            <BlogCard images={images[0]} />
                            <BlogCard images={images[0]} />
                            <BlogCard images={images[0]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Blogs-footer">
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Blogs


const BlogCard = ({ images }) => {
    return (

        <div className="BlogCardComponent">
            <div className="BlogCardContainer">
                <div className="BlogCard">
                    <div className="Blog-img">
                        <img src={images.src} alt="" />
                    </div>
                    <div className="Blog-Content">
                        <div className="Blog-time">
                            <p>{images.time}</p>
                        </div>
                        <div className="Blog-title">
                            <h1>{images.title}</h1>
                        </div>
                        <div className="Blog-category">
                            <p>{images.matter}</p> 
                        </div>
                        <div className="Blog-LearnMore"> 
                            <p>446 Participants</p> 
                            <Link className='Blog-LearnMore-link' to='/'>Learn More</Link>
                        </div>  
                    </div>
                </div>
            </div>    
        </div>

    );
}

const SideBar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (

            <div className="SideBarContainer">
                <div className="SideBar-one cm-cn-sb">
                    <div className="SideBar-one-one">
                        <h3>Trending Articles</h3>
                    </div>
                    <div className="SideBar-one-two">
                        <div>
                            <p
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                Today
                            </p>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Trending</MenuItem>
                                <MenuItem onClick={handleClose}>Last Week</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className="SideBar-two cm-cn-sb">
                    <div className="SideBar-two-one">
                        <p>Infinite Scrolling in React: A Practical Guide</p>
                    </div>
                    <div className="SideBar-two-two">
                        <p>Oluwabusayo Jacobs.</p>
                        <p>2 days ago</p>
                    </div>
                </div>

                <div className="SideBar-three cm-cn-sb">
                    <div className="SideBar-two-one">
                        <p>Infinite Scrolling in React: A Practical Guide</p>
                    </div>
                    <div className="SideBar-two-two">
                        <p>Oluwabusayo Jacobs.</p>
                        <p>2 days ago</p>
                    </div>
                </div>

                <div className="SideBar-four cm-cn-sb">
                    <div className="SideBar-two-one">
                        <p>Infinite Scrolling in React: A Practical Guide</p>
                    </div>
                    <div className="SideBar-two-two">
                        <p>Oluwabusayo Jacobs.</p>
                        <p>2 days ago</p>
                    </div>
                </div>

                <div className="SideBar-five cm-cn-sb">
                    <div className="SideBar-two-one">
                        <p>Infinite Scrolling in React: A Practical Guide</p>
                    </div>
                    <div className="SideBar-two-two">
                        <p>Oluwabusayo Jacobs.</p>
                        <p>2 days ago</p>
                    </div>
                </div>
            </div>
    );
}


const NewSideBar = () => {

    return (    

        <div className="NewSideBarContainer">
            <div className="NewSideBar-one">
                <h1>ZeroOne Blog</h1>
                <Link className='NewSideBar-one-Link'>New</Link>
            </div>
            <div className="NewSideBar-two">
                <p>An end-to-end blogging platform for devtools, engineering, and open-source teams.</p>
            </div>
            <div className="NewSideBar-three">
                <Link className='NewSideBar-three-Link'>Read Full Blog</Link>
            </div>
        </div>
    );
}