const supertest = require("supertest");
const http = require("http");
const Test = supertest.Test;

Test.prototype.expectStatus = function (expectedStatus) {
  return this.expect((response) => {
    const {status} = response;

    if(expectedStatus !== status) {
      const message = `
      Request: ${this.method} ${this.url}
        Headers: ${JSON.stringify(this.header)}
        Body: ${JSON.stringify(this._data)}
      Response:
        Headers: ${JSON.stringify(this.header)}
        Body: ${JSON.stringify(response.body)}
        Status: ${response.status}

      Expected ${expectedStatus} "${http.STATUS_CODES[expectedStatus]}", got ${status} "${http.STATUS_CODES[status]}`

      throw new Error(message);
    }
  })
}