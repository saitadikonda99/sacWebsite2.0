import React, { useState } from 'react';
import './page.css';

function Page() {
  return (
    <div className="App">
      <ScrollComponent />
    </div>
  );
}

export default Page;




function ScrollComponent() {
  const [scrolling, setScrolling] = useState('horizontal');

  const handleScroll = (e) => {
    const scrollDiv = e.target;
    
    if (scrolling === 'horizontal' && scrollDiv.scrollLeft + scrollDiv.clientWidth >= scrollDiv.scrollWidth) {
      // If the horizontal scroll is at the end, switch to vertical scrolling
      setScrolling('vertical');
    }
  };

  return (
    <div
      className={`scroll-container ${scrolling === 'vertical' ? 'vertical-scroll' : ''}`}
      onScroll={handleScroll}
    >
      <div className="horizontal-content">
       
      </div>
      <div className="vertical-content">
      
      </div>
    </div>
  );
}

