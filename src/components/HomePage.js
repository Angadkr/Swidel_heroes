import React from 'react'; 
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'; // Carousel library for rewards section

const HomePage = ({ isLoggedIn }) => {
  const rewards = [
    { id: 1, title: "Mega Reward 1", description: "Earn a free smartwatch after 500 deliveries!", image: "/images/reward1.jpg" },
    { id: 2, title: "Mega Reward 2", description: "Win a gift card worth ₹2000!", image: "/images/reward2.jpg" },
    { id: 3, title: "Reward 3", description: "Get exclusive Swidel Heroes merchandise.", image: "/images/reward3.jpg" },
    { id: 4, title: "Reward 4", description: "Enjoy free meals for a week!", image: "/images/reward4.jpg" },
    { id: 5, title: "Reward 5", description: "Special performance bonus for top delivery heroes.", image: "/images/reward5.jpg" },
    { id: 6, title: "Reward 6", description: "Participation in Swidel Heroes of the Month Contest.", image: "/images/reward6.jpg" },
  ];

  return (
    <Box>
      {/* Section 1: Full-Height Background */}
      <Box
        sx={{
          height: '100vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background Image with reduced opacity */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/local-market.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5, // Reduce opacity
            zIndex: -1, // Push image behind content
          }}
        />
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: 'black' }}>
          Welcome to Swidel Heroes
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, color: 'black' }}>
          Empowering Delivery Heroes in Local Markets
        </Typography>
        <Box>
          {!isLoggedIn ? (
            <>
              <Button variant="contained" color="primary" sx={{ mx: 1 }} href="/login">
                Login
              </Button>
              <Button variant="contained" color="primary" sx={{ mx: 1 }} href="/register">
                Register
              </Button>
            </>
          ) : (
            <Button variant="contained" color="primary" sx={{ mx: 1 }} component={Link} to="/profile">
              Profile
            </Button>
          )}
        </Box>
      </Box>

      {/* Section 2: About Swidel */}
      <Box
        sx={{
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f7f7f7',
          px: { xs: 2, sm: 4 },
        }}
      >
        <Card
          sx={{
            display: 'flex',
            width: '90%',
            maxWidth: '1200px',
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <CardMedia
            component="img"
            image="/images/happy-delivery-boy.jpg" // Replace with your image path
            alt="Happy Delivery Boy"
            sx={{ width: '40%' }}
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
              About Swidel Heroes
            </Typography>
            <Typography variant="body1">
              Swidel Heroes is your gateway to success as a delivery professional. Enjoy performance-based rewards, exclusive
              incentives, and a supportive community. Join us to unlock opportunities and take your career to new heights!
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Section 3: Rewards Carousel */}
      <Box
        sx={{
          height: '50vh',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          Mega Rewards for Delivery Heroes
        </Typography>
        <Carousel
          sx={{ width: '90%', maxWidth: '1200px' }}
          navButtonsAlwaysVisible
          indicators={false}
          animation="slide" // Smooth slide animation
          duration={300} // Realistic smooth transition
        >
          {rewards.map((reward) => (
            <Box
              key={reward.id} // Unique key for each reward
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: 3,
                borderRadius: 2,
                overflow: 'hidden',
                p: 2,
              }}
            >
              <Box
                component="img"
                src={reward.image}
                alt={reward.title}
                sx={{ width: { xs: '100%', sm: '40%' }, borderRadius: 1 }}
              />
              <Box sx={{ p: 2, textAlign: 'left' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {reward.title}
                </Typography>
                <Typography variant="body2">{reward.description}</Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default HomePage;
