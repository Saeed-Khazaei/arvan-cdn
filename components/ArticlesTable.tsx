import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditButton from './EditButton';
import { Article } from '../models/articles';
import { Stack } from '@mui/material';

const rows: Article[] = [
  {
    slug: 'Create-a-new-implementation-1',
    title: 'Create a new implementation',
    description: 'join the community by creating a new implementation',
    body: 'Share your knowledge and enpower the community by creating a new implementation',
    tagList: ['implementations'],
    createdAt: '2021-11-24T12:11:08.212Z',
    updatedAt: '2021-11-24T12:11:08.212Z',
    favorited: false,
    favoritesCount: 3782,
    author: {
      username: 'Gerome',
      bio: null,
      image: 'https://api.realworld.io/images/demo-avatar.png',
      following: false,
    },
  },
  {
    slug: 'Create-a-new-implementation-2',
    title: 'Create a new implementation',
    description: 'join the community by creating a new implementation',
    body: 'Share your knowledge and enpower the community by creating a new implementation',
    tagList: ['codebaseShow', 'implementations'],
    createdAt: '2021-11-24T12:11:08.212Z',
    updatedAt: '2021-11-24T12:11:08.212Z',
    favorited: false,
    favoritesCount: 3782,
    author: {
      username: 'Gerome',
      bio: null,
      image: 'https://api.realworld.io/images/demo-avatar.png',
      following: false,
    },
  },
];

const ArticlesTable = () => {
  return (
    <TableContainer>
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '80px' }}>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Execerpt</TableCell>
            <TableCell align="right">Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index: number) => (
            <TableRow key={row.slug}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>@{row.author.username}</TableCell>
              <TableCell>
                {row.tagList.map((t, index: number) => (
                  <span>
                    {t}
                    {row.tagList.length - 1 == index ? '' : ', '}
                  </span>
                ))}
              </TableCell>
              <TableCell>
                {row.body.split(/\s+/).slice(0, 20).join(' ')}
              </TableCell>
              <TableCell align="right" sx={{ paddingRight: 0 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  spacing={2}
                >
                  <span>
                    {new Date(row.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <EditButton />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ArticlesTable;
