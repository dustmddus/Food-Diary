export interface Team {
  id: number;
  name: string;
  sportsCategory: string;
  memberCount: number;
}

export interface State {
  title: string;
  matchType: string;
  sportsCategory: string;
  teamId?: number;
  matchDate: string;
  participants: number | string;
  content: string;
}
