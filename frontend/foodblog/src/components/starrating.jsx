import React, { useState, useRef } from 'react';
import './AdvancedStarRating.css';

const AdvancedStarRating = ({
  rating = 0,
  onRatingChange = () => {},
  maxStars = 5,
  allowHalfStars = false,
  size = 'medium',
  disabled = false,
  showRatingValue = false,
  color = '#ffd700'
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [isHalf, setIsHalf] = useState(false);
  const starRefs = useRef([]);

  const handleClick = (newRating, isHalfStar = false) => {
    if (!disabled) {
      const finalRating = isHalfStar ? newRating - 0.5 : newRating;
      onRatingChange(finalRating);
        setHoverRating(finalRating);
        console.log(finalRating)
    }
  };

  const handleMouseMove = (event, star) => {
    if (!disabled && allowHalfStars) {
      const rect = starRefs.current[star - 1].getBoundingClientRect();
      const isLeftHalf = event.clientX - rect.left < rect.width / 2;
      setIsHalf(isLeftHalf);
      setHoverRating(isLeftHalf ? star - 0.5 : star);
    } else if (!disabled) {
      setHoverRating(star);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setHoverRating(0);
      setIsHalf(false);
    }
  };

  const renderStar = (star) => {
    const isFilled = star <= rating;
    const isHoverFilled = star <= hoverRating;
    const isHalfStar = allowHalfStars && 
                      ((isHoverFilled && isHalf && Math.ceil(hoverRating) === star) || 
                       (!hoverRating && rating % 1 !== 0 && Math.ceil(rating) === star));

    let starClass = 'star';
    if (isHoverFilled && !disabled) {
      starClass += ' hover-filled';
    } else if (isFilled) {
      starClass += ' filled';
    }

    if (isHalfStar) {
      starClass += ' half';
    }

    return starClass;
  };

  return (
    <div className={`advanced-star-rating ${size} ${disabled ? 'disabled' : ''}`}>
      <div className="stars-container">
        {[...Array(maxStars)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={starValue}
              ref={(el) => (starRefs.current[index] = el)}
              className={renderStar(starValue)}
              onClick={() => handleClick(starValue, allowHalfStars && isHalf)}
              onMouseMove={(e) => handleMouseMove(e, starValue)}
              onMouseLeave={handleMouseLeave}
              style={{ 
                cursor: disabled ? 'default' : 'pointer',
                color: (renderStar(starValue).includes('filled') || 
                       renderStar(starValue).includes('hover-filled')) ? color : '#ddd'
              }}
            >
              {renderStar(starValue).includes('half') ? '⯨' : '★'}
            </span>
          );
        })}
      </div>
      {showRatingValue && (
        <div className="rating-value">
          {rating.toFixed(allowHalfStars ? 1 : 0)} / {maxStars}
        </div>
      )}
    </div>
  );
};

export default AdvancedStarRating;