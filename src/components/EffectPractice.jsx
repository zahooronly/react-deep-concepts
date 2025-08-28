import React, { useEffect, useState } from "react";

export const EffectPractice = () => {
  const [sectionTitle, setSection] = useState("posts");
  const [content, setContent] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://jsonplaceholder.typicode.com/${sectionTitle}`)
      .then((response) => response.json())
      .then((json) => setContent(json))
      .catch((err) => setErr(err));
    return controller.abort();
  }, [sectionTitle]);

  return (
    <>
      <button onClick={() => setSection("posts")}>Posts</button>
      <button onClick={() => setSection("comments")}>Comments</button>
      <button onClick={() => setSection("users")}>Users</button>
      <h1>{sectionTitle}</h1>
      {err && <p>{err}</p>}
      {content && <div>{JSON.stringify(content)}</div>}
    </>
  );
};
