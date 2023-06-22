import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";


import TestimonialImage_01 from '../../Assets/TestimonialsImages/TestimonialImage_01.jpg';
import TestimonialImage_02 from '../../Assets/TestimonialsImages/TestimonialImage_02.png'; 

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
    return (
      <div
        className="testimonial"
        style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
          <Slider autoplay={true} >
            <Card
              img={TestimonialImage_01}
              text="Learning at the Student Activity Center has been an adventure unlike any other, a journey that has taken me far beyond the confines of my traditional classroom. Here at the SAC, I've found myself on a rollercoaster ride of excitement and discovery, developing my techno-management skills and unlocking new insights into the art of leadership."
              name="Deepak Reddy Gathpa"
              title="Department of CSE"
            />
            <Card
              img={TestimonialImage_02}
              text="If you are looking for a platform that will help you surpass your limits, all I can say is that KL SAC, the Student Activity Centre, where you will discover a new you. I’m saying this because after joining the SAC, it helped me in various ways like time management, socialisation, workplace etiquette, etc. I’m sure you will get to see your new self here too"
              name="John Rahul, B.Tech 2nd Year"
              title="Department of CSE"
            />
          </Slider>
        </div>
      </div>
    );
  };
  
  const Card = ({ img, text, name, title }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "gray",
        }}
      >
        <Avatar 
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 20,
          }}
        />
        <p>{text}</p>
  
        <p style={{ fontStyle: "italic", marginTop: 25 }}>
          <span style={{ fontWeight: 500, color: "red" }}>{name}</span> , {title}
        </p>
      </div>
    );
  };
  

export default Testimonial;