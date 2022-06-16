import instance from ".";

export const getPosts = async () => {
  const result = await instance({
    method: "GET",
    url: "/posts",
  });
  return result.data;
};
