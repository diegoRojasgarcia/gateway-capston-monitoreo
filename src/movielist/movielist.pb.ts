import { Observable } from 'rxjs';

export const MOVIELIST_SERVICE_NAME = 'MovielistService';

export const MOVIELIST_PACKAGE_NAME = 'movielist';

export interface MovielistServiceClient {
  createMovielist(CreateMovielistRequest): Observable<CreateMovieslistResponse>;
  findMovielistByUserId(findByUserIdRequest): Observable<FindByUserIdResponse>;
}

export interface Movielist {
  id: number;
  nombre: string;
  idUser: number;
}

export interface CreateMovielistRequest {
  idUser: number;
  nombre: string;
}

export interface CreateMovieslistResponse {
  status: number;
  error: string[];
  data: Movielist | undefined;
}

//find movielist by idUser

export interface findByUserIdRequest {
  idUser: number;
}

export interface FindByUserIdResponse {
  status: number;
  error: string[];
  data: Movielist[] | undefined;
}
