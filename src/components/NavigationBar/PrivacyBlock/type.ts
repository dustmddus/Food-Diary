export interface Values {
  invitationId: number;
  teamId: number;
  name: string;
  logoImageUrl: string;
  createdAt: string;
}

export interface Response {
  values: Values[];
  hasNext: boolean;
  cursor: {
    createdAt: string;
    id: number | null;
  };
}
