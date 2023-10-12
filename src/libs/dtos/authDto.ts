import { User } from "./users.dto";

export type RegisterDto = Pick<User, 'email' | 'name'> & { password: string };

export type LoginDto = Omit<RegisterDto, 'name'>;
