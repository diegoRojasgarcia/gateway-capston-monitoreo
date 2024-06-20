import { Observable } from 'rxjs';

export const DIRECENTOS_SERVICE_NAME = 'DirecentosService';

export const DIRECENTOS_PACKAGE_NAME = 'direcentos';

export interface FoldersCentosServiceClient {
  getDirectorios(Empty): Observable<directoriosResponse>;
  getLaboratorios(Empty): Observable<laboratoriosResponse>;
  getDates(request: labInput): Observable<datesResponse>;
  getActividades(request: actividadInput): Observable<actividadResponse>;
  getPcs(request: pcsInput): Observable<PcsResponse>;
  writeToFile(request: labInput): Observable<createFileResponse>;
  writeToFiles(request: writeToFilesInput): Observable<createFileResponse>;
  writeToFileProg(request: InputFileProg): Observable<createFileResponse>;
  deletedFile(request: labInput): Observable<deletedResponse>;
  existFile(request: labInput): Observable<existFileResponse>;
  getLabsMonitoring(Empty): Observable<labsMonitoringResponse>;
}

export interface Empty {}

export interface labsMonitoringResponse {
  status: number;
  error: string[];
  folders: string[];
}

export interface directoriosResponse {
  status: number;
  error: string[];
  folders: string[];
}

export interface laboratoriosResponse {
  status: number;
  error: string[];
  folders: string[];
}

export interface labInput {
  lab: string;
}

export interface writeToFilesInput {
  lab: string;
  filename: string;
  content: string;
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

export interface actividadInput {
  lab: string;
  fecha: string;
}

export interface actividadResponse {
  status: number;
  error: string[];
  folders: string[];
}

export interface pcsInput {
  lab: string;
  fecha: string;
  actividad: string;
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
