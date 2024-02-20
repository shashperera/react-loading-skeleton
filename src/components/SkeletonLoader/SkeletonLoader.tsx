import React from 'react';
import './SkeletonLoader.css'; // Import CSS for styling
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Image = styled('img')({
  width: '100%',
  display: 'block', // Ensures proper rendering in all browsers
});

interface SkeletonLoaderProps {
  loading?: boolean; // Add loading prop here
  width?: string;
  height?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ loading = false, width = '100%', height = '1em' }) => {
  const items = ['Item 1', 'Item 2', 'Item 3']; // Example array of items

  return (
    <Grid item xs={12} md={6}>
      <Box sx={{ width: '100%' }}>
        {loading ? (
          <Skeleton variant="rounded" width="100%" height={50} />
        ) : (
          <AppBar position="static" sx={{ width: '100%' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Menu
              </Typography>
            </Toolbar>
          </AppBar>
        )}
        <Box sx={{ marginTop: '16px', width: '100%' }}>
          {loading ? (
            <Skeleton variant="rectangular" height={200} width="100%" />
          ) : (
            <Image
              src="https://media.istockphoto.com/id/591423264/fi/valokuva/office-ty%C3%B6p%C3%B6yt%C3%A4-jossa-on-kohteita.jpg?s=1024x1024&w=is&k=20&c=7-Tu0XLkybLvJocwBn0P1XxmH1bigRiryanwZ30PxP0="
              alt=""
            />
          )}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
        <Box sx={{ margin: 1 }}>
          {loading ? (
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          ) : (
            <Avatar src="https://media.istockphoto.com/id/1313644269/fi/vektori/kulta-ja-hopeaympyr%C3%A4n-t%C3%A4htilogomalli.jpg?s=1024x1024&w=is&k=20&c=ytxXojmirGht64Oo_0ddFhScLOiKHrE_tPyskKnjxm4=" />
          )}
        </Box>
        <Box sx={{ width: '100%' }}>
          {loading ? (
            <>
              <Skeleton variant="text"/>
              <Skeleton variant="text"/>
              <Skeleton variant="text"/>
            </>
          ) : (
            <>
              <div>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default SkeletonLoader;
