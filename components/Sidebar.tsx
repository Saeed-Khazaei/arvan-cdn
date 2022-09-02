import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const routes = [
  { title: 'Categories', url: '/categories' },
  { title: 'Templates', url: '/templates' },
  {
    title: 'Live renders',
    url: '/support/live-renders',
  },
  { title: 'Videos', url: '/videos' },
  { title: 'Renders', url: '/renders' },
  { title: 'User', url: '/user' },
];

const Sidebar = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '300px',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" component="div" color="common.white" p={2}>
        Posts
      </Typography>
      <Box>
        <Link href="/">
          <Typography
            variant="h6"
            component="div"
            color="common.white"
            sx={{ width: '100%', background: '#09f', cursor: 'pointer' }}
            px={4}
            py={1}
          >
            All Articles
          </Typography>
        </Link>
        <Link href="/">
          <Typography
            variant="h6"
            component="div"
            color="common.white"
            sx={{ width: '100%', cursor: 'pointer' }}
            px={4}
            py={1}
          >
            New Article
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
