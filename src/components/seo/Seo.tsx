import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

export function Seo({ title, description, keywords, path = "" }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", `https://vscommission.de${path}`, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [title, description, keywords, path]);

  return null;
}
