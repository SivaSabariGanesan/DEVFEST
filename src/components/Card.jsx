import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import card from './hackathon-background.jpg'; // Your image source
import { useState } from 'react';
import { gsap } from 'gsap';

const StyledCard = styled(Card)({
  position: 'relative',
  width: 345,
  overflow: 'hidden',
  // cursor: 'pointer',
  backgroundColor: '#c3ff00',
  color: '#fff',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 30px rgba(0, 255, 255, 0.5)',
  },
  borderRadius: '10px',
});

const DetailsText = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#00ffcc',
  textAlign: 'center',
  pointerEvents: 'none',
  zIndex: 10,
});

export const EventCard = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isShareHovered, setIsShareHovered] = useState(false); // Track hover state on the share button

  const toggleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };

  const handleShareMouseEnter = () => {
    setIsShareHovered(true); // Set share hover state to true
  };

  const handleShareMouseLeave = () => {
    setIsShareHovered(false); // Set share hover state to false
  };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={card}
        alt="Card image"
        style={{
          rounded: true,
          padding: '5px',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
          borderBlockColor: '#FFFFFF',
          width: '100%', // Ensures the image takes full width of the card
          height: '300px', // Set a fixed height for all cards
          objectFit: 'cover', // Ensures the image scales properly and maintains its aspect ratio
          filter: 'brightness(0.5)',
        }}
      />

      <CardContent>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', fontFamily: 'Space Grotesk, sans-serif' }}
        >
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={toggleFavorite}>
          <i className={`px-2 text-black bi ${isFavorited ? 'bi-heart-fill' : 'bi-heart'}`}></i>
        </IconButton>
        <IconButton
          aria-label="share"
          onMouseEnter={handleShareMouseEnter}
          onMouseLeave={handleShareMouseLeave}
        >
          <i className={`px-2 text-black bi ${isShareHovered ? 'bi-share-fill' : 'bi-share'}`}></i>
          {/* Icon changes on hover of the share button */}
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};
