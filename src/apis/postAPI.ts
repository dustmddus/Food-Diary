import { AxiosResponse } from "axios";
import { useRecoilValue } from "recoil";
import { sportsCategory } from "src/recoil/category";
import { axiosAuthInstance, axiosDefaultInstance } from "./axiosInstances";

//메인페이지 최신순 post
export const MainPost = async () => {
  const category = useRecoilValue(sportsCategory);

  try {
    const res = await axiosDefaultInstance.get("/api/matches", {
      params: {
        size: 5,
        category,
        status: "WAITING",
        distance: 40,
        userId: "",
      },
    });
    const data = (res.data as AxiosResponse).data as Response;
    return data;
  } catch (e) {
    console.log(e);
  }
};
