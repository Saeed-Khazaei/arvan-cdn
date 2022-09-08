import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import {
  Box,
  Grid,
  Card,
  Stack,
  TextField,
  Typography,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import articles from '../../../services/articles';
import { useRouter } from 'next/router';
import tags from '../../../services/tags';
import { Article, ArticleUpdate } from '../../../models/articles';

const EditSlug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [loading, setLoading] = useState(false);
  const [tagText, setTagText] = useState('');
  const [articleData, setArticleData] = useState<Article>({
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    createdAt: '',
    updatedAt: '',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: '',
      bio: null,
      image: '',
      following: false,
    },
  });
  const [tagsData, setTagsData] = useState<string[]>([]);

  const fetchArticle = async () => {
    setLoading(true);
    if (slug && typeof slug == 'string') {
      try {
        const res = await articles.getArticle(slug);
        console.log('res', res);
        setLoading(false);
        setArticleData(res.article);
      } catch (error: any) {
        setLoading(false);
        console.log('error', error.message);
      }
    }
    setLoading(false);
    return;
  };

  const fetchTags = async () => {
    try {
      const res = await tags.getTags();
      setTagsData(res.tags.sort());
    } catch (error: any) {
      console.log('error', error.message);
    }
  };

  const onSubmit = async () => {
    // setLoading(true);
    let body: ArticleUpdate = {
      title: articleData.title,
      description: articleData.description,
      body: articleData.body,
      tagList: articleData.tagList,
    };
    if (slug && typeof slug == 'string') {
      try {
        const res = await articles.updateArticle(slug, {
          ...body,
        });
        console.log('res', res);
        if (slug !== res.article.slug) {
          router.push({
            pathname: `/articles/edit/${res.article.slug}`,
          });
        }
      } catch (error: any) {
        // setLoading(false);
        console.log('error', error.message);
      }
    }
    return;
  };

  const onToggleTag = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (checked) {
      setArticleData({
        ...articleData,
        tagList: [...articleData?.tagList, event.target.name].sort(),
      });
    } else {
      setArticleData({
        ...articleData,
        tagList: [...articleData?.tagList]
          .filter((i) => i != event.target.name)
          .sort(),
      });
    }
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticleData({ ...articleData, title: e.target.value });
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticleData({ ...articleData, description: e.target.value });
  };

  const onChangeBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticleData({ ...articleData, body: e.target.value });
  };
  const onChangeTagText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagText(e.target.value);
  };

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      const mySet = new Set<string>([...tagsData, tagText]);
      const newTags = Array.from(mySet).sort();
      setTagsData(newTags);
      setArticleData({
        ...articleData,
        tagList: [...articleData.tagList, tagText].sort(),
      });
    }
  };
  useEffect(() => {
    fetchTags();
  }, []);
  useEffect(() => {
    fetchArticle();
  }, [slug]);

  return (
    <Layout>
      {!slug || loading ? (
        'loading'
      ) : (
        <Stack spacing={3}>
          <Typography variant="h3" component="h3">
            Edit Article
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
            <Stack sx={{ flex: 9 }} spacing={3}>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                type="text"
                fullWidth
                error={false}
                helperText={''}
                placeholder="Title"
                value={articleData?.title ?? ''}
                onChange={onChangeTitle}
              />
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                type="text"
                fullWidth
                error={false}
                helperText={''}
                placeholder="Description"
                value={articleData?.description ?? ''}
                onChange={onChangeDescription}
              />
              <TextField
                id="body"
                label="Body"
                variant="outlined"
                type="text"
                fullWidth
                error={false}
                multiline
                rows={10}
                helperText={''}
                value={articleData?.body ?? ''}
                onChange={onChangeBody}
              />
            </Stack>
            <Stack sx={{ flex: 3 }} spacing={1}>
              <TextField
                id="tags"
                label="Tags"
                variant="outlined"
                type="text"
                fullWidth
                error={false}
                helperText={''}
                placeholder="New tag"
                onChange={onChangeTagText}
                onKeyDown={keyPress}
              />
              <Card variant="outlined">
                <CardContent>
                  <FormGroup>
                    {tagsData.length > 0 &&
                      articleData?.tagList.length &&
                      tagsData.map((t) => (
                        <FormControlLabel
                          key={t}
                          control={
                            <Checkbox
                              color="primary"
                              name={t}
                              checked={
                                articleData?.tagList.find((i) => i == t)
                                  ? true
                                  : false
                              }
                              onChange={onToggleTag}
                            />
                          }
                          label={t}
                        />
                      ))}
                  </FormGroup>
                </CardContent>
              </Card>
            </Stack>
          </Stack>
          <Button
            color="primary"
            variant="contained"
            size="large"
            sx={{ maxWidth: 'max-content' }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Stack>
      )}
    </Layout>
  );
};

export default EditSlug;
