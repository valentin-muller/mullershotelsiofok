/**
 * Caution: Consider this file when using react-scripts
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout } from './layouts';

import {
  Home as HomeView,
  BlogList as BlogListView,
  Blog as BlogView, 
  Gallery as GalleryView,
  Pricing as PricingView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/Home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={BlogListView}
        exact
        layout={MainLayout}
        path="/bloglist"
      />
      <RouteWithLayout
        component={BlogView}
        exact
        layout={MainLayout}
        path="/blog"
      />
      <RouteWithLayout
        component={GalleryView}
        exact
        layout={MainLayout}
        path="/gallery"
      />
      <RouteWithLayout
        component={PricingView}
        exact
        layout={MainLayout}
        path="/pricing"
      />
      <Redirect to="/not-found-cover" status="404" />
    </Switch>
  );
};

export default Routes;
