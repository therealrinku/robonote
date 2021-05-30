import Head from "next/head";

export default function Meta({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      <link rel="icon" href="https://bit.ly/3i4y7q4" />
      <meta name="description" content={description} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "taskyoxx",
  description: "Your daily task manager.",
};
