/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router";
const GitHub = () => {
  const data = useLoaderData();
  return (
    <>
      <h1>GitHub</h1>
      <p>GitHub User: {data.login}</p>
      <p>GitHub Name: {data.name}</p>
      <p>GitHub ID: {data.id}</p>
      <p>GitHub followers: {data.followers}</p>
      <p>GitHub bio: {data.bio}</p>
      <img src={data.avatar_url} alt={data.name} />
      {/* <span>{JSON.stringify(data)}</span> */}
    </>
  );
};

export default GitHub;

export const getGitHubUser = async () => {
  const response = await fetch(`https://api.github.com/users/zahooronly`);
  const data = await response.json();
  console.log(data);
  return data;
};
