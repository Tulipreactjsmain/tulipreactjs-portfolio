import { Helmet } from "react-helmet";

const HeadMetaData: React.FC = function () {
  return (
    <Helmet>
      <title>Solomon Adesanya (aka Tulipman) - Software Engineer</title>
      <meta name="description" content="description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Solomon Adesanya - Elevate Your Ideas, Reach for the Stars"
      />
      <meta
        property="og:description"
        content="We are your partners in innovation, transforming visions into reality through cutting-edge technology and personalized solutions. Join our community of dreamers and achievers. Let's propel your business to new heights together!"
      />
      <meta property="og:image" content="/coverImage.webp" />
      <meta property="og:url" content="https://tulipreactjs.vercel.app/" />
      <meta property="og:site_name" content="tulipreactjs" />
      <meta name="twitter:card" content="/coverImage.webp" />
      <meta
        name="twitter:title"
        content="Stardelite - Elevate Your Ideas, Reach for the Stars"
      />
      <meta
        name="twitter:description"
        content="We are your partners in innovation, transforming visions into reality through cutting-edge technology and personalized solutions. Join our community of dreamers and achievers. Let's propel your business to new heights together!"
      />
      <meta name="twitter:image" content="/coverImage.webp" />
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
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default HeadMetaData;
