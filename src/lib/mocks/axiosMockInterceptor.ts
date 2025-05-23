import { AxiosInstance } from "axios";
import { mockResponses } from "./mockResponses";

export function setupAxiosMockInterceptor(instance: AxiosInstance) {
  instance.interceptors.request.use((config) => {
    const url = config.url;
    const region = config.params?.region;
    const fullPath = `${url}?region=${region}`;

    const mock = mockResponses[fullPath as keyof typeof mockResponses];

    if (mock) {
      return Promise.reject({
        __MOCK__: true,
        config,
        data: mock,
      });
    }
    return config;
  });

  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.__MOCK__) {
        return Promise.resolve({ data: err.data });
      }
      return Promise.reject(err);
    },
  );
}
