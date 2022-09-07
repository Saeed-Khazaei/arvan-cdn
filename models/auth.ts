export interface UserLogin {
  user: {
    email: string;
    password: string;
  }
}

export interface UserRegister {
  user: {
    email: string;
    password: string;
    username: string;
  }
}