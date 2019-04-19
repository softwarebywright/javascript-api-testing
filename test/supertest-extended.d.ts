import * as supertest from 'supertest';

declare module 'supertest' {
  interface Test {
    expectStatus(code: number): Test;
  }
}
