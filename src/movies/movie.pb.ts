import { Observable } from 'rxjs';

export const MOVIE_SERVICE_NAME = 'MoviesService';

export const MOVIE_PACKAGE_NAME = 'movies';

export interface MovieServiceClient {
  getAllMovies(Empty): Observable<getMoviesResponse>;
  getMoviesTMDB(getMoviesTMDB): Observable<getMoviesTMDBResponse>;
  getMovieDetailTMDB(Empty): Observable<getdetailmoviesTMDBResponse>;
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

export interface getMoviesTMDB {
  id: number;
}

export interface getMoviesTMDBResponse {
  status: number;
  error: string[];
  message: string;
}

export interface getdetailmoviesTMDBResponse {
  status: number;
  error: string[];
  message: string;
}
