export interface Team {
  id: number;
  name: string;
  sportsCategory: string;
  memberCount: number;
}

export interface Content {
  title: string;
  matchType: string;
  sportsCategory: string;
  teamId?: number | string;
  matchDate: string;
  participants: number | string;
  content: string;
}
