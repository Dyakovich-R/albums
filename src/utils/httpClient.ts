const BASE_URL = 'https://jsonplaceholder.typicode.com';
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
};

const handleResponse = (response: Response) => {
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.json();
};

export const client = {
  get<T>(url: string): Promise<T> {
    return fetch(BASE_URL + url).then(handleResponse);
  },
  post<T>(url: string, data: any): Promise<T> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: DEFAULT_HEADERS,
    };

    return fetch(BASE_URL + url, options).then(handleResponse);
  },
  patch<T>(url: string, data: any): Promise<T> {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: DEFAULT_HEADERS,
    };

    return fetch(BASE_URL + url, options).then(handleResponse);
  },
  delete<T>(url: string): Promise<T> {
    return fetch(BASE_URL + url, { method: 'DELETE' }).then(handleResponse);
  },
};
