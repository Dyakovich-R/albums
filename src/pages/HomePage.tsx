import { Helmet } from 'react-helmet';

export const HomePage = () => (
  <>
    <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="home"
        />
      </Helmet>
  <h1 className="title">Home page</h1>
  </>
);
