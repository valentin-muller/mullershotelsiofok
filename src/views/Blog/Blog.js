import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Content,
  FooterNewsletter,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from './components';

import { content } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sidebarNewsletter: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark,
  },
}));

const AttemptTwoBlog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero
        cover={content.cover}
        title={content.title}
        subtitle={content.subtitle}
        author={content.author}
      />
      <Section>
        <Grid container spacing={4}>
            <Content data={content} />
        </Grid>
      </Section>
    </div>
  );
};

export default AttemptTwoBlog;
