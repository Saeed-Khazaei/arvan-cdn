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
export interface UserResponse {
  user: {
    email: string;
    username: string;
    bio: null;
    image: null;
    token: string;
  }
}