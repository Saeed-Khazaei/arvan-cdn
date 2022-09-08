import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditButton from './EditButton';
import { Article } from '../models/articles';
import { Stack } from '@mui/material';

const ArticlesTable = (props: { articles: Article[] }) => {
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
          {props.articles.length > 0 &&
            props.articles.map((row, index: number) => (
              <TableRow key={row.slug}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>@{row.author.username}</TableCell>
                <TableCell>
                  {row.tagList.map((t, index: number) => (
                    <span key={t}>
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
                    <EditButton id={row.slug} />
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
