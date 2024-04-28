import axios, { AxiosHeaders, AxiosInstance, CancelToken } from "axios";

export const baseURL = "https://gogotravel-be.onrender.com";
interface ApiRequest {}
interface ApiResponse {}
interface ApiParams {
  lang: string;
}

/** Request options */
type RequestOptions<P extends ApiParams> = {
  params?: P;
  cancelToken?: CancelToken;
};

class httpClient {
  private axiosInstance: AxiosInstance;

  /**
   * Validate response status
   * @param status {number}
   * @returns {boolean}
   */
  private validateStatus(status: number): boolean {
    return status >= 200 && status < 400;
  }

  constructor(host: string) {
    this.axiosInstance = axios.create({
      baseURL: host,
      validateStatus: this.validateStatus,
    });
  }

  /**
   * GET method
   * @param {string} path - path after domain
   * @param {T} [request] - get parameters
   * @param {RequestOptions<P>} [options]  - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async get<
    T extends ApiRequest,
    R extends ApiResponse,
    P extends ApiParams = ApiParams
  >(path: string, request?: T, options?: RequestOptions<P>): Promise<R> {
    return this.axiosInstance
      .get(path, {
        params: {
          ...request,
          ...options?.params,
        },
        withCredentials: false,
        cancelToken: options?.cancelToken,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => response.data);
  }

  /**
   * POST method
   * @param {string} path - path after domain
   * @param {T} request - request body
   * @param {RequestOptions<P>} [options] - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async post<
    T extends ApiRequest,
    R extends ApiResponse,
    P extends ApiParams = ApiParams
  >(path: string, request: T, options?: RequestOptions<P>): Promise<R> {
    return this.axiosInstance
      .post(path, request, {
        params: {
          ...options?.params,
        },
        headers: {
          "Content-Type": "application/json",
        },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  /**
   * PUT method
   * @param {string} path - path after domain
   * @param {T} request - request body
   * @param {RequestOptions<P>} [options] - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async put<
    T extends ApiRequest,
    R extends ApiResponse,
    P extends ApiParams = ApiParams
  >(path: string, request: T, options?: RequestOptions<P>): Promise<R> {
    return this.axiosInstance
      .put(path, request, {
        params: {
          ...options?.params,
        },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  /**
   * DELETE method
   * @param {string} path - path after domain
   * @param {RequestOptions<P>} [options] - http request options
   * @returns {Promise<R>} api response
   * @template R, P
   */
  async delete<R extends ApiResponse, P extends ApiParams = ApiParams>(
    path: string,
    options?: RequestOptions<P>
  ): Promise<R> {
    return this.axiosInstance
      .delete(path, {
        params: {
          ...options?.params,
        },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new httpClient(baseURL);
