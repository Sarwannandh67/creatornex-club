import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = "CreatorNex - AI Innovation Club",
  description = "CreatorNex - The premier AI Innovation Club at SRM University. We empower students through hands-on AI/ML workshops, hackathons, industry projects, and research opportunities.",
  type = "website",
  name = "CreatorNex",
  pathname = ""
}) => {
  const siteUrl = "https://www.creatornex.site";
  const url = `${siteUrl}${pathname}`;
  
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />
      <meta property="og:image:alt" content="CreatorNex Club Banner" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/twitter-image.png`} />
      <meta name="twitter:image:alt" content="CreatorNex Club Banner" />

      {/* Additional SEO */}
      <meta name="keywords" content="CreatorNex, AI Club, Machine Learning, SRM University, Student Innovation, Tech Community, Artificial Intelligence, Workshops, Hackathons, Projects" />
      <meta name="author" content="CreatorNex Club" />
      <meta name="robots" content="index, follow" />
      
      {/* PWA */}
      <meta name="theme-color" content="#5c4cb8" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="CreatorNex" />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CreatorNex",
          "url": siteUrl,
          "logo": `${siteUrl}/apple-touch-icon.png`,
          "sameAs": [
            "https://github.com/Sarwannandh67/creatornex-club",
            // Add other social media links here
          ],
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "general",
            "url": `${siteUrl}/contact`
          }
        })}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  pathname: PropTypes.string
};

export default SEO; 