import { Observable } from 'rxjs';

export const MOVIELIST_SERVICE_NAME = 'MovielistService';

export const MOVIELIST_PACKAGE_NAME = 'movielist';

export interface MovielistServiceClient {
  createMovielist(CreateMovielistRequest): Observable<CreateMovieslistResponse>;
}

export interface CreateMovielistRequest {
  idUser: number;
  nombre: string;
}

export interface Movielist {
  id: number;
  nombre: string;
  idUser: number;
}

export interface CreateMovieslistResponse {
  status: number;
  error: string[];
  data: Movielist | undefined;
}
