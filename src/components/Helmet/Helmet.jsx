export const Helmet = ({ title, children }) => {
  document.title = `Masterwave - Ecommerce Development Company || ${title}`;
  return children;
};
