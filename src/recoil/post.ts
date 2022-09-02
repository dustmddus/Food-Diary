import { atom, selector } from "recoil";

export const postManager = atom({
  key: "posts",
  default: [],
});

// export const allPost = selector({
//   key: "allPost",
//   get: ({ get }) => {
//     const state = get(postManager);
//     return state;
//   },
//   set: ({ set }, newPosts) => {
//     const data=newPosts.map((post))
//   }
// });

// export const mainPost = selector({
//   key: "mainPost",
//   get: ({ get }) => {
//     const posts = [...get(allPost)];
//   },
// });
