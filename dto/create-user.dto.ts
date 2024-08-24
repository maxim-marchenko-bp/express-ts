export interface CreateUserDto {
  name: string;
  username: string;
  email: string;
  password: string;
  age?: number;
  gender?: Gender;
}

export type Gender = 'f' | 'm' | 'u';
