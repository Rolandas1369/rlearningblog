import React from "react";
import { Route } from "react-router-dom";
import Blog from './components/blog';

const BaseRouter = () => (
    <div>
          <Route exact path="/more" component={Blog}/>{" "}
    </div>
  );
  
  export default BaseRouter;
  