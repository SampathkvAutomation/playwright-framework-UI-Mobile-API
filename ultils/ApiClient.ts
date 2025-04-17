import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  readonly request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getAPiRequest(endpoint: string) {
    return this.request.get(endpoint, {
      headers: {},

      params: {},
    });
  }

  async postAPiRequest(endpoint: string, requestBody: any, requestheader: any) {
    return this.request.post(endpoint, {
      data: requestBody,
      headers: requestheader,
    });
  }
}
