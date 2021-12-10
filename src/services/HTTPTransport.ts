enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

type MethodOptions = {
  header?: { [key: string]: string };
  data?: XMLHttpRequestBodyInit;
  timeout?: number;
};

type RequestOptions = {
  method: METHODS;
  data?: XMLHttpRequestBodyInit;
  header?: { [key: string]: string };
};

// TODO:
// Когда приходит объект в data делать JSON.stringify и проставлять заголовок Content-Type: application/json

function queryStringify(data: XMLHttpRequestBodyInit): string {
  let resultString = '?';
  Object.keys(data).forEach((key, idx) => {
    if (idx !== 0) {
      resultString += `&${key}=${data[key].toString()}`;
    } else {
      resultString += `${key}=${data[key].toString()}`;
    }
  });
  return resultString;
}

class HTTPTransport {
  public get = (url: string, options: MethodOptions = {}) => {
    const appendUrl = url + options.data ? queryStringify(options.data) : '';
    return this.request(
      appendUrl,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  public put = (url: string, options: MethodOptions = {}) =>
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  public post = (url: string, options: MethodOptions = {}) =>
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  public delete = (url: string, options: MethodOptions = {}) =>
    this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  private request = (url: string, options: RequestOptions, timeout = 5000) => {
    const { method, header, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.timeout = timeout;

      if (header) {
        Object.keys(header).forEach((key) => {
          xhr.setRequestHeader(key, header[key]);
        });
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.ontimeout = function () {
        reject(new Error());
      };

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

export default HTTPTransport;
