import { Observable } from 'rxjs';

export interface RegisterRequest {
  email: string;
  nombre: string;
  password: string;
}

export interface RegisterResponse {
  status: number;
  error: string[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  error: string[];
  token: string;
  user: string;
}

export interface ValidateRequest {
  token: string;
}

export interface ValidateResponse {
  status: number;
  error: string[];
  user: number;
}

export interface FindUserByIdRequest {
  id: string;
}

export interface FindUserByIdResponse {
  status: number;
  error: string[];
  user: number;
}

export interface AuthServiceClient {
  register(request: RegisterRequest): Observable<RegisterResponse>;

  login(request: LoginRequest): Observable<LoginResponse>;

  validate(request: ValidateRequest): Observable<ValidateResponse>;

  FindUserById(request: FindUserByIdRequest): Observable<FindUserByIdResponse>;
}

export const AUTH_SERVICE_NAME = 'AuthService';

export const AUTH_PACKAGE_NAME = 'auth';
