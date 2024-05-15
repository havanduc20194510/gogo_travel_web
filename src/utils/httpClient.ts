import axios, { AxiosInstance, CancelToken } from "axios";
import { deleteFromLocalStorage, getFromLocalStorage } from "./localStorage";

export const baseURL = "http://gogotravel.ap-southeast-1.elasticbeanstalk.com";

const checkAuth = async () => {
  deleteFromLocalStorage("user");
  deleteFromLocalStorage("token");

  // const pathname = window.location.pathname;
  // if (pathname !== "/login" && pathname !== "/register") {
  //   window.location.href = "/login";
  // }
};

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

    this.initAuthenticate();
  }

  /**
   * Initialization authenticate
   * @returns
   */
  public initAuthenticate() {
    const token: string | undefined = getFromLocalStorage("token");
    if (token) {
      this.axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
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
      .then((response) => response.data)
      .catch((e) => {
        if (e.response.status === 401) {
          checkAuth();
        }
        throw new Error(e);
      });
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
      .then((response) => response.data)
      .catch((e) => {
        if (e.response?.status === 401) {
          checkAuth();
        }
        throw new Error(e);
      });
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
      .then((response) => response.data)
      .catch((e) => {
        if (e.response.status === 401) {
          checkAuth();
        }
        throw new Error(e);
      });
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
    options?: RequestOptions<P> & { data?: any }
  ): Promise<R> {
    const config = {
      ...options,
      data: options?.data,
    };

    return this.axiosInstance
      .delete(path, config)
      .then((response) => response.data as R)
      .catch((e) => {
        if (e.response.status === 401) {
          checkAuth();
        }
        throw new Error(e);
      });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new httpClient(baseURL);
