import { Observable } from 'rxjs';

export const DIRECENTOS_SERVICE_NAME = 'DirecentosService';

export const DIRECENTOS_PACKAGE_NAME = 'direcentos';

export interface FoldersCentosServiceClient {
  getDirectorios(Empty): Observable<directoriosResponse>;
  getLaboratorioscnts(Empty): Observable<laboratoriosResponse>;
  getDates(request: labInput): Observable<datesResponse>;
  getActividades(request: actividadInput): Observable<actividadResponse>;
  getLastActividad(request: actividadInput): Observable<lastactividadResponse>;
  getPcs(request: pcsInput): Observable<PcsResponse>;
  writeToFile(request: labInput): Observable<createFileResponse>;
  writeToFiles(request: writeToFilesInput): Observable<createFileResponse>;
  writeToFileProg(request: InputFileProg): Observable<createFileResponse>;
  deletedFile(request: labInput): Observable<deletedResponse>;
  existFile(request: labInput): Observable<existFileResponse>;
  getLabsMonitoring(Empty): Observable<labsMonitoringResponse>;
  getLaboratoriosdb(Empty): Observable<laboratoriosbdResponse>;
  getProgramaciones(Empty): Observable<programacionesResponse>;
  CreateProgramacion(Programacion): Observable<programacionResponse>;
  CreateA(createAinput): Observable<AResponse>;
  CreateW(createWinput): Observable<WResponse>;
  CreateDuracion(createDuracioninput): Observable<DuracionResponse>;
  UpdateLab(updateLabInput): Observable<updateLabResponse>;
  UpdateProgramacion(
    updateProgramacionInput,
  ): Observable<updateProgramacionResponse>;
  DeleteProgramacion(
    deleteProgramacionInput,
  ): Observable<deleteProgramacionResponse>;
  createAplicacion(createApliacioninput): Observable<AplicacionResponse>;
  deleteAplicacion(deleteAplicacionInput): Observable<AplicacionResponse>;
  getAplicaciones(Empty): Observable<aplicacionesResponse>;
}

export interface aplicacionesResponse {
  status: number;
  error: string[];
  aplicaciones: Aplicacion[];
}

export interface Aplicacion {
  nombre: string;
}

export interface createApliacioninput {
  nombre: string;
}

export interface deleteAplicacionInput {
  id: number;
}

export interface AplicacionResponse {
  status: number;
  error: string[];
  aplicacion: Aplicacion;
}

export interface createDuracioninput {
  laboratorio: string;
  actividad: string;
  horas: number;
  minutos: number;
}

export interface DuracionResponse {
  status: number;
  error: string[];
}

export interface deleteProgramacionInput {
  id: number;
}

export interface deleteProgramacionResponse {
  status: number;
  error: string[];
  programacion: Programacion;
}

export interface updateProgramacionInput {
  id: number;
  actividad: string;
  fecha: string;
  horainicio: string;
  horafin: string;
}

export interface updateProgramacionResponse {
  status: number;
  error: string[];
  programacion: Programacion;
}

export interface updateLabInput {
  id: number;
  displayName: string;
}

export interface updateLabResponse {
  status: number;
  error: string[];
  laboratorio: Laboratorio;
}

export interface createWinput {
  websites: string[];
}

export interface W {
  id: number;
}

export interface WResponse {
  status: number;
  error: string[];
  websites: W;
}

export interface createAinput {
  aplicaciones: string[];
}

export interface A {
  id: number;
}

export interface AResponse {
  status: number;
  error: string[];
  aplicaciones: A;
}

export interface Programacion {
  id: number;
  actividad: string;
  laboratorio: string;
  labdisplayname: string;
  email: string;
  fecha: string;
  horainicio: string;
  horafin: string;
}

export interface programacionResponse {
  status: number;
  error: string[];
  programacion: Programacion;
}

export interface programacionesResponse {
  status: number;
  error: string[];
  programaciones: Programacion[];
}

export interface Empty {}

export interface labsMonitoringResponse {
  status: number;
  error: string[];
  folders: Laboratorio[];
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

export interface laboratoriosbdResponse {
  status: number;
  error: string[];
  laboratorios: Laboratorio[];
}

export interface Laboratorio {
  nombre: string;
  displayName: string;
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

export interface Actividad {
  nombre: string;
}

export interface lastactividadResponse {
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
