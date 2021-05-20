import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Snaptask",
  description: "Your daily task manager.",
};

export default Meta;
