export interface Author {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

export interface Proposal {
  id: number;
  status: string;
  content: string;
}

export interface Team {
  id: number;
  name: string;
  sportsCategory: string;
  logoImageUrl: string;
}

export interface PostDetail {
  id: number;
  title: string;
  status: string;
  sportsCategory: string;
  author: Author;
  team: Team | null;
  participants: number;
  matchDate: string;
  matchType: string;
  content: string;
  proposer: Proposal | null;
}
