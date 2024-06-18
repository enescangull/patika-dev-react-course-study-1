import axios from "axios";

export default async (num) => {
  let userId = num;
  const url = "https://jsonplaceholder.typicode.com/";

  const responseUsers = await axios(url + "users/" + userId);
  const users = responseUsers.data;

  const responsePosts = await axios(url + "posts?userId=" + userId);
  const posts = responsePosts.data;

  await console.log(users);
  await console.log(posts[0]);

  return { users, posts };
};
