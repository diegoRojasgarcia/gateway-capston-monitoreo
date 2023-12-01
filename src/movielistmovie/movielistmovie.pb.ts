import { Observable } from 'rxjs';

export const MOVIELISTMOVIE_SERVICE_NAME = 'MovielistmovieService';

export const MOVIELISTMOVIE_PACKAGE_NAME = 'movielistmovie';

export interface MovielistmovieServiceClient {
  createMovielistmovie(
    CreateMovielistMovieRequest,
  ): Observable<CreateMovielistMovieResponse>;
  getMoviesByIdMovielist(getMoviesRequest): Observable<GetMoviesResponse>;
}

export interface CreateMovielistMovieRequest {
  idmovielist: number;
  idmovie: number;
}

export interface MovieListmovie {
  id: number;
  idmovielist: number;
  idmovie: number;
}

export interface CreateMovielistMovieResponse {
  status: number;
  error: string[];
  movielistmovie: MovieListmovie;
}

export interface getMoviesRequest {
  id: number;
}

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

export interface GetMoviesResponse {
  status: number;
  error: string[];
  movies: Movie[];
}
