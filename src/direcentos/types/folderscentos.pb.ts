import { Observable } from 'rxjs';

export const DIRECENTOS_SERVICE_NAME = 'DirecentosService';

export const DIRECENTOS_PACKAGE_NAME = 'direcentos';

export interface FoldersCentosServiceClient {
  getDirectorios(Empty): Observable<directoriosResponse>;
  getDates(request: labInput): Observable<datesResponse>;
  getPcs(request: pcsInput): Observable<PcsResponse>;
  writeToFile(request: labInput): Observable<createFileResponse>;
  writeToFileProg(request: InputFileProg): Observable<createFileResponse>;
  deletedFile(request: labInput): Observable<deletedResponse>;
  existFile(request: labInput): Observable<existFileResponse>;
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

export interface InputFileProg {
  lab: string;
  content: string;
}

export interface createFileInput {
  lab: string;
  actividad: string;
}

export interface createFileProgInput {
  lab: string;
  content: string;
}

export interface datesResponse {
  status: number;
  error: string[];
  folders: string[];
}

export interface pcsInput {
  lab: string;
  fecha: string;
}

export interface PcsResponse {
  status: number;
  error: string[];
  folders: string[];
}

export interface createFileResponse {
  status: number;
  error: string[];
  created: boolean;
}

export interface existFileResponse {
  status: number;
  error: string[];
  exist: boolean;
}

export interface deletedResponse {
  status: number;
  error: string[];
  deleted: boolean;
}
