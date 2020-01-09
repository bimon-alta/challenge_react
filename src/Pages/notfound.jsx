import React from "react";
import Header from '../Component/header';
import '../css/article.css';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import { actions } from "../store";

const NotFound = props => {
  const pathname = window.location.pathname;
  props.setAsNewsPage(false);
  return (
    <div className='article-body'>
    <Header />
    <section className="content">
        <h4>Not found</h4>
        <p>
          Page: <b>{pathname}</b> you're looking for IS NOT FOUND
        </p>
    </section>
</div>       
  );
};

// export default NotFound;
export default connect("", actions)(withRouter(NotFound));
