import { Observable } from 'rxjs';

export const MOVIE_SERVICE_NAME = 'MoviesService';

export const MOVIE_PACKAGE_NAME = 'movies';

export interface MovieServiceClient {
  getMovies(Empty): Observable<getMoviesResponse>;
}

export interface Empty {}

export interface Detalle {
  id: number;
  originaltitle: string;
  overview: string;
  posterpath: string;
}

export interface Movie {
  id: number;
  adult: boolean;
  detalle: Detalle;
}

export interface getMoviesResponse {
  status: number;
  error: string[];
  data: Movie[] | undefined;
}
