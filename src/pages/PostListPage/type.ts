export interface Values {
  id: number;
  title: string;
  category: string;
  matchType: string;
  content: string;
  distance: number;
  createdAt: string;
}

export interface Response {
  values: Values[];
  hasNext: boolean;
  cursor: {
    createdAt: string;
    id: number | null;
  };
  category: string;
}
