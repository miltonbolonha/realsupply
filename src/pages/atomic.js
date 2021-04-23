import React from "react";
import { Link } from "gatsby";

// import Image from "../components/image";
import Layout from "../modules/layout";

const AtomicPage = () => {
  return (
    <Layout type='body' args={{ pageTitle: "Home" }}>
      <Layout
        type='header'
        args={{ id: "header" }}
        setLocation='global-header'
        siteTitle=''
      />

      <Layout type='main' setLocation='global-main'>
        <Layout
          type='row'
          setLocation='home-row'
          rowColorClass='jum'
          bgColor='#36ddf9'
          args={{
            boxed: true,
          }}
        >
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div>{/* <Image /> */}</div>
        </Layout>

        <Layout
          type='row'
          setLocation='home-footer-row'
          args={{
            boxed: true,
          }}
        >
          <Link to='/index-json/'>Go to JSON Home</Link>
          <br />
          <Link to='/page-2/'>Go to page 2</Link>
          <Layout type='footer' setLocation='global-footer' />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AtomicPage;
