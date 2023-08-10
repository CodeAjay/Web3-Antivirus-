// TestimonialSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from './testimonialData'; // Assuming both files are in the same directory

const TestimonialSlider = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3, // Show 3 testimonials at a time
    speed: 500,
  };

  return (
    <section className="testimonial-section">
    <div className="testimonial-slider">
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
};

export default TestimonialSlider;
