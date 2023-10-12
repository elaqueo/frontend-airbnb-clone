import axios, { AxiosInstance } from "axios";
import { LoginDto, RegisterDto } from "../dtos/authDto";

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

class Auth {
  constructor(private readonly api: AxiosInstance) { }

  public async register(registerDto: RegisterDto) {
    const r = await this.api.post('/auth/register', registerDto);
    return r.data;
  }

  public async login(loginDto: LoginDto) {
    const r = await this.api.post('/auth/login', loginDto);
    api.defaults.headers.common = { 'Authorization': `Bearer ${r.data.token}` }

    return await this.getProfile();
  }

  public async getProfile() {
    const r = await this.api.get('/auth/profile');
    return r.data;
  }
}

export class AirBnbClass {
  private readonly api: AxiosInstance;
  public readonly auth: Auth;

  constructor() {
    this.api = api;

    this.auth = new Auth(this.api);
  }
}

export const AirBnb = new AirBnbClass();
