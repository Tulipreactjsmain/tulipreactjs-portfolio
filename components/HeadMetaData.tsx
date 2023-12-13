import Head from "next/head";

const HeadMetaData: React.FC = function () {
  return (
    <Head>
      <title>Solomon Adesanya (aka Tulipman) - Software Engineer</title>
      <meta
        name="description"
        content="Passionate about designing intuitive user interfaces and building scalable applications for an exceptional user experience."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Solomon Adesanya (aka Tulipman) - Software Engineer"
      />
      <meta
        property="og:description"
        content="Passionate about designing intuitive user interfaces and building scalable applications for an exceptional user experience."
      />
      {/* <meta property="og:image" content="/coverImage.webp" /> */}
      <meta property="og:url" content="https://tulipreactjs.vercel.app/" />
      <meta property="og:site_name" content="Solomon Adesanya" />
      {/* <meta name="twitter:card" content="/coverImage.webp" /> */}
      <meta
        name="twitter:title"
        content="Solomon Adesanya (aka Tulipman) - Software Engineer"
      />
      <meta
        name="twitter:description"
        content="Passionate about designing intuitive user interfaces and building scalable applications for an exceptional user experience."
      />
      {/* <meta name="twitter:image" content="/coverImage.webp" /> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/ProfessionalPhoto.ico"
      />
      <link
        rel="icon"
        type="image/ico"
        sizes="32x32"
        href="/public/ProfessionalPhoto.ico"
      />
      <link
        rel="icon"
        type="image/ico"
        sizes="16x16"
        href="/ProfessionalPhoto.ico"
      />
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
    </Head>
  );
};

export default HeadMetaData;
