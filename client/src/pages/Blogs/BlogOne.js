import React from 'react';
import './BlogsOne.css';
import storiesImage from '../../Assets/stories.webp';
import {Link as Scroll} from 'react-scroll';
import {Link} from 'react-router-dom';
import Footer from '../../components/home/Footer/Footer';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';


const BlogOne = () => {


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


  return (
    <div className='BlogsPage'>
        <div className="BlogsPageContainer">
        <div className="Event-Nav blogs-one-nav">
                    <div className='HomeNavComponent blogs-one-nav'>
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
            <div className="BlogsPage-header">
                <div className="BlogsPage-header-in">
                    <h1>Insights & Inspiration: Explore Our Blog | Unlocking New Perspectives</h1>
                </div>
            </div>

            <div className="BlogsPage-one">
                <div className="Blogs-one-in">
                    <div className="Blogs-one-in-one">
                        <h1>Latest on Student Activity Center Blogs</h1>
                    </div>

                    <div className="Blogs-one-in-two">
                        <div className="Blogs-one-in-two-in">
                            <div className="boiti-comps">
                                <div className="boiti-comps-in">
                                    <div className="boiti-comps-in-one">
                                        <h1>01</h1>
                                    </div>
                                    <div className="boiti-comps-in-two">
                                        <p>Mohammad Jawaad</p>
                                        <h1>Exploring the Vibrant World of KL University: A First-Year Student's Journey at KL SAC</h1>
                                        <p>Sep 26. 10 mins read</p>
                                        
                                        <Scroll className='boiti-link' activeClass="active" to="blog-one" spy ={true} smooth={true} offset={-10} duration={200} >Read More</Scroll>

                                    </div>
                                </div>
                            </div>

                            <div className="boiti-comps">
                                <div className="boiti-comps-in">
                                    <div className="boiti-comps-in-one">
                                        <h1>02</h1>
                                    </div>
                                    <div className="boiti-comps-in-two">
                                        <p>Mohammad Jawaad</p>
                                        <h1>Enriching Journeys at SAC: From Stand-up Comedy to the Fashion Runway</h1>
                                        <p>Sep 26. 12 mins read</p>

                                        <Scroll className='boiti-link' activeClass="active" to="blog-two" spy ={true} smooth={true} offset={-10} duration={200} >Read More</Scroll>
                                    </div>
                                </div>
                            </div>

                            <div className="boiti-comps">
                                <div className="boiti-comps-in">
                                    <div className="boiti-comps-in-one">
                                        <h1>03</h1>
                                    </div>
                                    <div className="boiti-comps-in-two">
                                        <p>Mohammad Jawaad</p>
                                        <h1>A Journey: Battling Addiction and Depression with Martial Arts and MMA</h1>
                                        <p>Sep 23. 8 mins read</p>

                                        <Scroll className='boiti-link' activeClass="active" to="blog-three" spy ={true} smooth={true} offset={-10} duration={200} >Read More</Scroll>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    <div className="Blogs-one-in-three" id='blogs-scroll-one'>
                        <div className="Blogs-one-in-three-in">
                            <div className="boiti-blog blog-one">
                                <div className="boiti-blog-in">
                                    <div className="boiti-blog-in-one">
                                        <div className="boiti-blog-in-one-one">
                                            <h1>Exploring the Vibrant World of KL University: A First-Year Student's Journey at KL SAC</h1>
                                            <p>deepakreddygathpa</p>
                                            <p>Oct 1. 3 mins read</p>
                                        </div>
                                        <div className="boiti-blog-in-one-three">
                                            <div className="boiti-blog-in-one-three-in">
                                                <img src={storiesImage} alt="" />
                                            </div>
                                        </div>
                                        <div className="boiti-blog-in-one-two">
                                        <p>As I stepped onto the sprawling campus of KL University as a wide-eyed first-year student, I
                                            was filled with a mix of excitement and nervousness. The world of higher education was new and uncharted territory for me, and I couldn't wait to begin this incredible journey of self-discovery.Little did I know that my adventure would start right at the heart of the campus, at the KL StudentActivity Center (KL SAC). KL SAC, or the Student Activity Center, was the hub of student life on campus. It was a bustling place filled with energy, enthusiasm, and endless possibilities. On my very first day, I wandered into this vibrant space, not knowing what to expect. What I discovered there would shape my college experience in ways I could never have imagined. <br /> <br />
                                            One of the first things that struck me about KL SAC was the sheer diversity of clubs and
                                            activities it offered. Whether you were interested in sports, arts, technology, or community service,
                                            there was a club for you. As a first-year student, it was important for me to engage with these clubs
                                            and discover my passions.
                                            First, I found myself drawn to "El Comicos," the Stand-Up Comedy Club. Laughter is truly
                                            the best medicine, and this club provided not only hilarious performances but also a welcoming
                                            community where I could try my hand at comedy. I never thought I'd have the courage to stand on
                                            a stage and make people laugh, but with the support of my fellow club members, I gave it a shot and
                                            found a new passion. <br /> <br />
                                            "ZeroOne," the Coding School Club, was a natural choice for me as a computer science enthusiast.
                                            It was here that I not only sharpened my coding skills but also collaborated on exciting projects with
                                            like-minded peers. The knowledge I gained from this club not only complemented my academic
                                            studies but also opened doors to internships and job opportunities.
                                            In an increasingly digital world, the "Cybersecurity Club" and "Web Apps Club" were essential for
                                            anyone interested in the tech field. These clubs offered workshops and hands-on experiences in the
                                            ever-evolving realms of cybersecurity and web development. I was amazed at how these clubs
                                            transformed complex concepts into practical, accessible learning experiences.
                                            For those with a flair for fashion, "Fitoor-e-Kala," the Fashion Designing Club, provided a platform to
                                            explore their creativity. From designing clothing to organizing fashion shows, this club allowed
                                            students to express their unique style and collaborate on stunning fashion projects.Gaming
                                            enthusiasts found their haven in the "Gaming Club," where they could compete in tournaments, try
                                            out the latest games, and bond over their shared love for gaming. It was more than just a club; it was
                                            a community of gamers who understood the thrill of victory and the agony of defeat. <br /> <br />
                                            
                                            Music enthusiasts joined the "Swara Music Club," where they could immerse themselves in the
                                            world of melody and harmony. Whether you played an instrument or simply had a passion for
                                            singing, this club welcomed everyone who wanted to explore the magic of music.
                                            Dance lovers had not one but two options at KL SAC: "Fusion Club" and "Narthana Club." These
                                            dance clubs were not just about perfecting choreography but also about celebrating different dance
                                            forms and cultures. The dance floor was a place of self-expression and unity, where I learned that
                                            dance was a universal language that transcended barriers.
                                            What struck me most about these clubs was their inclusivity and the sense of belonging they
                                            provided. No matter your background or experience level, there was a place for you in the KL SAC
                                            clubs. I felt welcomed, encouraged, and empowered to explore my interests and push my
                                            boundaries. <br /> <br />
                                            But KL SAC wasn't just about extracurricular activities; it was also a place for personal growth.
                                            Through workshops, seminars, and mentorship programs, I had the chance to develop valuable life
                                            skills such as leadership, time management, and teamwork. These skills would prove invaluable as I
                                            progressed through my academic journey and prepared for the challenges of the real world.
                                            One of the most memorable moments of my first year at KL University was when I
                                            participated in a major intercollegiate coding competition with my Tech Innovators Club teammates.
                                            The preparation was intense, and there were moments of doubt, but the support and camaraderie
                                            we shared pushed us to excel. We not only won the competition but also learned the true meaning
                                            of teamwork and perseverance. As I reflect on my first year at KL University, I am grateful for the
                                            incredible experiences and growth opportunities I found at KL SAC. It was not just a place for clubs
                                            and activities; it was a place where I discovered myself, made lifelong friends, and honed the skills
                                            that would shape my future.
                                            KL SAC is more than just a student center; it's a sanctuary of personal and intellectual
                                            growth. It's a place where you can explore, learn, and be better with each passing day. My journey
                                            as a first-year student at KL University was greatly enriched by the vibrant and resourceful world of
                                            KL SAC, and I can't wait to see what the coming years have in store for me. As I continue to explore,
                                            I know that KL SAC will be there to guide me, support me, and help me become the best version of
                                            myself</p>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="boiti-blog blog-three">
                                <div className="boiti-blog-in">
                                    <div className="boiti-blog-in-one">
                                        <div className="boiti-blog-in-one-one">
                                            <h1>Exploring the Vibrant World of KL University: A First-Year Student's Journey at KL SAC</h1>
                                            <p>deepakreddygathpa</p>
                                            <p>Oct 1. 3 mins read</p>
                                        </div>
                                        <div className="boiti-blog-in-one-three">
                                            <div className="boiti-blog-in-one-three-in">
                                                <img src={storiesImage} alt="" />
                                            </div>
                                        </div>
                                        <div className="boiti-blog-in-one-two">
                                        <p>As I stepped onto the sprawling campus of KL University as a wide-eyed first-year student, I
                                            was filled with a mix of excitement and nervousness. The world of higher education was new and uncharted territory for me, and I couldn't wait to begin this incredible journey of self-discovery.Little did I know that my adventure would start right at the heart of the campus, at the KL StudentActivity Center (KL SAC). KL SAC, or the Student Activity Center, was the hub of student life on campus. It was a bustling place filled with energy, enthusiasm, and endless possibilities. On my very first day, I wandered into this vibrant space, not knowing what to expect. What I discovered there would shape my college experience in ways I could never have imagined. <br /> <br />
                                            One of the first things that struck me about KL SAC was the sheer diversity of clubs and
                                            activities it offered. Whether you were interested in sports, arts, technology, or community service,
                                            there was a club for you. As a first-year student, it was important for me to engage with these clubs
                                            and discover my passions.
                                            First, I found myself drawn to "El Comicos," the Stand-Up Comedy Club. Laughter is truly
                                            the best medicine, and this club provided not only hilarious performances but also a welcoming
                                            community where I could try my hand at comedy. I never thought I'd have the courage to stand on
                                            a stage and make people laugh, but with the support of my fellow club members, I gave it a shot and
                                            found a new passion. <br /> <br />
                                            "ZeroOne," the Coding School Club, was a natural choice for me as a computer science enthusiast.
                                            It was here that I not only sharpened my coding skills but also collaborated on exciting projects with
                                            like-minded peers. The knowledge I gained from this club not only complemented my academic
                                            studies but also opened doors to internships and job opportunities.
                                            In an increasingly digital world, the "Cybersecurity Club" and "Web Apps Club" were essential for
                                            anyone interested in the tech field. These clubs offered workshops and hands-on experiences in the
                                            ever-evolving realms of cybersecurity and web development. I was amazed at how these clubs
                                            transformed complex concepts into practical, accessible learning experiences.
                                            For those with a flair for fashion, "Fitoor-e-Kala," the Fashion Designing Club, provided a platform to
                                            explore their creativity. From designing clothing to organizing fashion shows, this club allowed
                                            students to express their unique style and collaborate on stunning fashion projects.Gaming
                                            enthusiasts found their haven in the "Gaming Club," where they could compete in tournaments, try
                                            out the latest games, and bond over their shared love for gaming. It was more than just a club; it was
                                            a community of gamers who understood the thrill of victory and the agony of defeat. <br /> <br />
                                            
                                            Music enthusiasts joined the "Swara Music Club," where they could immerse themselves in the
                                            world of melody and harmony. Whether you played an instrument or simply had a passion for
                                            singing, this club welcomed everyone who wanted to explore the magic of music.
                                            Dance lovers had not one but two options at KL SAC: "Fusion Club" and "Narthana Club." These
                                            dance clubs were not just about perfecting choreography but also about celebrating different dance
                                            forms and cultures. The dance floor was a place of self-expression and unity, where I learned that
                                            dance was a universal language that transcended barriers.
                                            What struck me most about these clubs was their inclusivity and the sense of belonging they
                                            provided. No matter your background or experience level, there was a place for you in the KL SAC
                                            clubs. I felt welcomed, encouraged, and empowered to explore my interests and push my
                                            boundaries. <br /> <br />
                                            But KL SAC wasn't just about extracurricular activities; it was also a place for personal growth.
                                            Through workshops, seminars, and mentorship programs, I had the chance to develop valuable life
                                            skills such as leadership, time management, and teamwork. These skills would prove invaluable as I
                                            progressed through my academic journey and prepared for the challenges of the real world.
                                            One of the most memorable moments of my first year at KL University was when I
                                            participated in a major intercollegiate coding competition with my Tech Innovators Club teammates.
                                            The preparation was intense, and there were moments of doubt, but the support and camaraderie
                                            we shared pushed us to excel. We not only won the competition but also learned the true meaning
                                            of teamwork and perseverance. As I reflect on my first year at KL University, I am grateful for the
                                            incredible experiences and growth opportunities I found at KL SAC. It was not just a place for clubs
                                            and activities; it was a place where I discovered myself, made lifelong friends, and honed the skills
                                            that would shape my future.
                                            KL SAC is more than just a student center; it's a sanctuary of personal and intellectual
                                            growth. It's a place where you can explore, learn, and be better with each passing day. My journey
                                            as a first-year student at KL University was greatly enriched by the vibrant and resourceful world of
                                            KL SAC, and I can't wait to see what the coming years have in store for me. As I continue to explore,
                                            I know that KL SAC will be there to guide me, support me, and help me become the best version of
                                            myself</p>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="boiti-blog blog-two">
                                <div className="boiti-blog-in">
                                    <div className="boiti-blog-in-one">
                                        <div className="boiti-blog-in-one-one">
                                            <h1>Exploring the Vibrant World of KL University: A First-Year Student's Journey at KL SAC</h1>
                                            <p>deepakreddygathpa</p>
                                            <p>Oct 1. 3 mins read</p>
                                        </div>
                                        <div className="boiti-blog-in-one-three">
                                            <div className="boiti-blog-in-one-three-in">
                                                <img src={storiesImage} alt="" />
                                            </div>
                                        </div>
                                        <div className="boiti-blog-in-one-two">
                                        <p>As I stepped onto the sprawling campus of KL University as a wide-eyed first-year student, I
                                            was filled with a mix of excitement and nervousness. The world of higher education was new and uncharted territory for me, and I couldn't wait to begin this incredible journey of self-discovery.Little did I know that my adventure would start right at the heart of the campus, at the KL StudentActivity Center (KL SAC). KL SAC, or the Student Activity Center, was the hub of student life on campus. It was a bustling place filled with energy, enthusiasm, and endless possibilities. On my very first day, I wandered into this vibrant space, not knowing what to expect. What I discovered there would shape my college experience in ways I could never have imagined. <br /> <br />
                                            One of the first things that struck me about KL SAC was the sheer diversity of clubs and
                                            activities it offered. Whether you were interested in sports, arts, technology, or community service,
                                            there was a club for you. As a first-year student, it was important for me to engage with these clubs
                                            and discover my passions.
                                            First, I found myself drawn to "El Comicos," the Stand-Up Comedy Club. Laughter is truly
                                            the best medicine, and this club provided not only hilarious performances but also a welcoming
                                            community where I could try my hand at comedy. I never thought I'd have the courage to stand on
                                            a stage and make people laugh, but with the support of my fellow club members, I gave it a shot and
                                            found a new passion. <br /> <br />
                                            "ZeroOne," the Coding School Club, was a natural choice for me as a computer science enthusiast.
                                            It was here that I not only sharpened my coding skills but also collaborated on exciting projects with
                                            like-minded peers. The knowledge I gained from this club not only complemented my academic
                                            studies but also opened doors to internships and job opportunities.
                                            In an increasingly digital world, the "Cybersecurity Club" and "Web Apps Club" were essential for
                                            anyone interested in the tech field. These clubs offered workshops and hands-on experiences in the
                                            ever-evolving realms of cybersecurity and web development. I was amazed at how these clubs
                                            transformed complex concepts into practical, accessible learning experiences.
                                            For those with a flair for fashion, "Fitoor-e-Kala," the Fashion Designing Club, provided a platform to
                                            explore their creativity. From designing clothing to organizing fashion shows, this club allowed
                                            students to express their unique style and collaborate on stunning fashion projects.Gaming
                                            enthusiasts found their haven in the "Gaming Club," where they could compete in tournaments, try
                                            out the latest games, and bond over their shared love for gaming. It was more than just a club; it was
                                            a community of gamers who understood the thrill of victory and the agony of defeat. <br /> <br />
                                            
                                            Music enthusiasts joined the "Swara Music Club," where they could immerse themselves in the
                                            world of melody and harmony. Whether you played an instrument or simply had a passion for
                                            singing, this club welcomed everyone who wanted to explore the magic of music.
                                            Dance lovers had not one but two options at KL SAC: "Fusion Club" and "Narthana Club." These
                                            dance clubs were not just about perfecting choreography but also about celebrating different dance
                                            forms and cultures. The dance floor was a place of self-expression and unity, where I learned that
                                            dance was a universal language that transcended barriers.
                                            What struck me most about these clubs was their inclusivity and the sense of belonging they
                                            provided. No matter your background or experience level, there was a place for you in the KL SAC
                                            clubs. I felt welcomed, encouraged, and empowered to explore my interests and push my
                                            boundaries. <br /> <br />
                                            But KL SAC wasn't just about extracurricular activities; it was also a place for personal growth.
                                            Through workshops, seminars, and mentorship programs, I had the chance to develop valuable life
                                            skills such as leadership, time management, and teamwork. These skills would prove invaluable as I
                                            progressed through my academic journey and prepared for the challenges of the real world.
                                            One of the most memorable moments of my first year at KL University was when I
                                            participated in a major intercollegiate coding competition with my Tech Innovators Club teammates.
                                            The preparation was intense, and there were moments of doubt, but the support and camaraderie
                                            we shared pushed us to excel. We not only won the competition but also learned the true meaning
                                            of teamwork and perseverance. As I reflect on my first year at KL University, I am grateful for the
                                            incredible experiences and growth opportunities I found at KL SAC. It was not just a place for clubs
                                            and activities; it was a place where I discovered myself, made lifelong friends, and honed the skills
                                            that would shape my future.
                                            KL SAC is more than just a student center; it's a sanctuary of personal and intellectual
                                            growth. It's a place where you can explore, learn, and be better with each passing day. My journey
                                            as a first-year student at KL University was greatly enriched by the vibrant and resourceful world of
                                            KL SAC, and I can't wait to see what the coming years have in store for me. As I continue to explore,
                                            I know that KL SAC will be there to guide me, support me, and help me become the best version of
                                            myself</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default BlogOne