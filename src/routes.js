import React from "react";
import { Route } from "react-router-dom";
import Blog from './components/blog';
import Post from './components/post';

const BaseRouter = () => (
    <div>
          <Route exact path="/" component={Post}/>{" "}
          <Route exact path="/more" component={Blog}/>{" "}
    </div>
  );
  
  export default BaseRouter;
  