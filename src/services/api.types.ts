export type RegisterType = {
  username: string;
  email: string;
  password: string;
};
export type LoginType = {
  email: string;
  password: string;
};

export type AuthResponse = {
  message: string;
  token?: string;
};
