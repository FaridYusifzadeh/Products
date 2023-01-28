import Head from "next/head";
const project_title = "Ingress Academy";
const domain_name = "https://dummyjson.com";

const SEO = ({
  title,
  description = "Products!",
  thumbnail = "Products",
  url = "https://dummyjson.com",
}) => {
  return (
    <Head>
      <title>Products{title && ` | ${title}`}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
      />
      <link rel="index" href={domain_name} />
      <link rel="canonical" href={domain_name} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title ? title : project_title}`} />
      <meta
        property="og:site_name"
        content={`${title ? title : project_title}`}
      />
      <meta property="og:image" content={thumbnail} />c
      <meta property="og:url" content={url} />
      <meta
        property="og:see_also"
        content={`${title ? title : project_title}`}
      />
      <meta property="og:description" content={description} />
      <meta itemProp="name" content={`${title ? title : project_title}`} />
      <meta itemProp="image" content={thumbnail} />
      <meta itemProp="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title ? title : project_title}`} />
      <meta name="twitter:image" content={thumbnail} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={description} />
      <meta name="application-name" content={project_title} />
      <meta name="theme-color" content="#fff" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={project_title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="msapplication-starturl" content={domain_name} />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta
        name="msapplication-TileImage"
        content="/favicons/mstile-144x144.png"
      />
    </Head>
  );
};

export default SEO;
