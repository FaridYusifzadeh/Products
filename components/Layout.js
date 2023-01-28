import { useRouter } from "next/router";
// Components
import SEO from "./SEO";

const Layout = ({
  children,
  title,
  description,
  url,
  thumbnail,
  type = "default",
  categories,
}) => {
  const router = useRouter();
  return (
    <div className="ui-layout">
      <SEO
        title={title}
        description={description}
        url={url}
        thumbnail={thumbnail}
      />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
