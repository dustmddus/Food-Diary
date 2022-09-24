import { Content } from "src/pages/PostCreatePage/type";
import { axiosAuthInstance } from "../utils/axiosInstances";

export const getAllPost = async (category: string, distance?: number) => {
  const data = await axiosAuthInstance.get("/api/matches", {
    params: {
      size: 10,
      category,
      status: "WAITING",
      userId: "",
      distance: distance,
    },
  });
  return data;
};

export const getPostDetail = async (postId?: string) => {
  const data = await axiosAuthInstance.get(`/api/matches/${postId}`);
  return data;
};

export const createPost = async (content: Content) => {
  const data = await axiosAuthInstance.post("/api/matches", content);
  return data;
};
