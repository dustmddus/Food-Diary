export interface Values {
  username?: string;
  password?: string;
}

export interface SuccessResponse {
  email: string | null;
  id: number;
  username: string;
  nickname: string;
  latitude: number | null;
  longitude: number | null;
  searchDistance: number | null;
}

export interface ErrorResponse {
  code: string;
  message: string;
}

export interface Response<T> {
  data: T;
}

export interface User {
  email: string | null;
  id: number;
  latitude: number;
  longitude: number;
  nickname: string;
  profileImageUrl: string | null;
  role: string;
  searchDistance: number;
  username: string;
}
