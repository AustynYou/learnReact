import instance from ".";

export const createUser = async (data) => {
  try {
    const result = await instance({
      method: "POST",
      url: "/users",
      data,
    });
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};
