import { HttpClient, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export abstract class GenericService<T> {

  protected url:string;

  constructor(private http: HttpClient, private baseURL: string) {
    this.url = baseURL;
  }

  /**
   * Salvar um objeto
   * @param model
   */
  save(model: T): Observable<any>{
    return this.http.post<T>(this.baseURL, model, environment.httpOptions);
  }

   /**
   * Buscar todos os Objetos para polular os dropdowns
   */
  findAllDropDown(): Observable<T[]> {
    return this.http.get<T[]>(this.baseURL+ '/dropdown');
  }

  /**
   * Buscar todos os Objetos
   */
  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseURL);
  }

  /**
   * Buscar Objeto por codigp
   * @param codigo
   */
  find(codigo: string): Observable<T[]> {
    return this.http.get<T[]>(this.baseURL + '/' + codigo);
  }

  /**
   * Deletar Objeto por codigo
   * @param codigo
   */
  delete(codigo: number): Observable<any> {
    return this.http.delete(this.baseURL + '/' + codigo);
  }

  /**
   * Alterar Objeto
   * @param model
   */
  alter(codigo: number, model: T): Observable<T> {
    return this.http.put<T>(this.baseURL + '/' + codigo, model);
  }

}
