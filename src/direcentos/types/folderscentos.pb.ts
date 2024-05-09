import { Observable } from 'rxjs';

export const DIRECENTOS_SERVICE_NAME = 'DirecentosService';

export const DIRECENTOS_PACKAGE_NAME = 'direcentos';

export interface FoldersCentosServiceClient {
  getDirectorios(Empty): Observable<directoriosResponse>;
  getDates(request: labInput): Observable<datesResponse>;
  writeToFile(request: labInput): Observable<createFileResponse>;
  deletedFile(request: labInput): Observable<deletedResponse>;
}

export interface Empty {}

export interface directoriosResponse {
  status: number;
  error: string[];
  folders: string[];
}

export interface labInput {
  lab: string;
}

export interface datesResponse {
  status: number;
  error: string[];
  folders: string[];
}

export interface createFileResponse {
  status: number;
  error: string[];
  created: boolean;
}

export interface deletedResponse {
  status: number;
  error: string[];
  deleted: boolean;
}
