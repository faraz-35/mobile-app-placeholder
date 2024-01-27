type User = {
  id: string;
  email: string;
  username: string;
  objects: string[];
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

interface Id {
  id: string;
}

interface UserObject {
  id: string;
  objectId: string;
}

interface UserPasswordChange {
  id: string;
  oldPassword: string;
  newPassword: string;
}
