type User = {
  email: string;
  password: string;
  username: string;
};

interface UserState {
  loading: boolean;
  error: string | null;
  data: User | null;
}

interface UserAuth {
  email: string;
  password: string;
}
