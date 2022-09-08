import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Sidebar = () => {
  const router = useRouter();
  console.log('router', router);
  const isCreate = router.pathname == '/articles/create' ? true : false;
  console.log('isCreate', isCreate);
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
        <Link href="/articles">
          <a>
            <Typography
              variant="h6"
              component="div"
              color="common.white"
              sx={{
                width: '100%',
                background: isCreate ? 'inherit' : '#09f',
                cursor: 'pointer',
              }}
              px={4}
              py={1}
            >
              All Articles
            </Typography>
          </a>
        </Link>
        <Link href="/articles/create">
          <a>
            <Typography
              variant="h6"
              component="div"
              color="common.white"
              sx={{
                width: '100%',
                background: !isCreate ? 'inherit' : '#09f',
                cursor: 'pointer',
              }}
              px={4}
              py={1}
            >
              New Article
            </Typography>
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
