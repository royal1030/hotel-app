import React, { useState, useEffect } from "react";
import { Card, Carousel, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const CardComp = ({
  ele,
  isSelected,
  onClick,
  onBookNow,
  handleShowNotification,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const images = ele.images;
    let intervalId;

    if (isHovered) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [ele, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getImageStyle = (index) => {
    return {
      transform: `translateX(-${index * 100}%)`,
      transition: "transform 0.5s ease-in-out",
    };
  };

  return (
    <div className="custom-card">
      <Card border="primary" style={{ padding: "20px" }}>
        <Card.Title style={{ textAlign: "center" }}>{ele.name}</Card.Title>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <Carousel interval={null} activeIndex={currentImageIndex}>
            {ele.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Hotel ${ele.name}`}
                  style={{ width: "100px", height: "200px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {isSelected && (
          <div>
            {ele.reviews.map((review, index) => (
              <p key={index}>
                <strong>User </strong>: {review.user}
                <br />
                <strong>Rating: </strong> {review.rating}
                <br />
                <strong>Comment: </strong> {review.comment}
                <br />
              </p>
            ))}
          </div>
        )}

        <Card.Body>
          <div className="row">
            <div className="col-md-6 mb-2">
              <Card.Text>{ele.city}</Card.Text>
            </div>
            <div className="col-md-6 mb-2">
              <div className="d-flex justify-content-md-end">
                {[...Array(ele.star)].map((index) => (
                  <FaStar key={index} color="#FFD700" size={12} />
                ))}
              </div>
            </div>
            <div className="col-md-12">
              <Button
                onClick={() => {
                  onBookNow();
                  handleShowNotification();
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComp;
