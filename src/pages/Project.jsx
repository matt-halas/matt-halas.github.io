import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";

function Project() {
  const { projectTitle } = useParams();
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(`/projects/${projectTitle}.md`);
      setMarkdown(await response.text());
    };

    fetchMarkdown();
  }, [projectTitle]);

  if (!projectTitle || !markdown) {
    return <>Project not found</>;
  }

  return (
    <div style={{ width: "1000px", marginLeft: "auto", marginRight: "auto" }}>
      <Markdown rehypePlugins={[rehypeRaw]}>{markdown}</Markdown>
    </div>
  )
}

export default Project;
