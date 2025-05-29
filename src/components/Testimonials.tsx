import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .testimonial-slider {
    padding: 20px 0;
  }

  .testimonial-slider .slick-slide {
    opacity: 0.7;
    transform: scale(0.9);
    transition: all 0.5s ease;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .testimonial-slider .slick-active {
    opacity: 1;
    transform: scale(1);
  }

  .testimonial-card {
    animation: float 6s ease-in-out infinite;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    max-width: 500px;
    margin: 0 auto;
  }

  .testimonial-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #3B82F6, #60A5FA);
  }

  .avatar-circle {
    animation: pulse 3s ease-in-out infinite;
    transition: all 0.3s ease;
    border: 3px solid #EFF6FF;
  }

  .quote-icon {
    animation: pulse 4s ease-in-out infinite;
    transition: all 0.3s ease;
  }

  .slick-dots {
    bottom: -40px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #CBD5E0;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  .slick-dots li.slick-active button:before {
    color: #3B82F6;
    opacity: 1;
    transform: scale(1.2);
  }

  .slick-prev, .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    background: white !important;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .slick-prev {
    left: -20px;
  }

  .slick-next {
    right: -20px;
  }

  .slick-prev:hover, .slick-next:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .slick-prev:before, .slick-next:before {
    color: #3B82F6;
    font-size: 20px;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "Lea W.",
      role: "Customer Experience Manager",
      initials: "LW",
      text: "CentralChat helped us unify communication across five platforms. Now we reply faster, know exactly who said what, and our bot handles repetitive questions.",
      rating: 5
    },
    {
      name: "Marc R.",
      role: "Digital Sales Lead",
      initials: "MR",
      text: "With Central Chat, our e-commerce team can even process orders directly in the chat. It's a game changer.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <svg
        key={index}
        className="w-4 h-4 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <style>{styles}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>
        
        <div className="relative">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="testimonial-card bg-white p-8 rounded-2xl shadow-lg h-[320px] flex flex-col border border-gray-100">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <div className="avatar-circle h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-lg font-semibold">{testimonial.initials}</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-grow">
                    <svg className="quote-icon w-8 h-8 text-blue-500 opacity-20 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 text-base leading-relaxed pl-6">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 