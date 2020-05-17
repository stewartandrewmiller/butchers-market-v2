import Service from '@ember/service';

export default class SessionService extends Service {
  token = null;
  payload = null;

  get email() {
    return this.payload ? this.payload.email : null;
  }

  get name() {
    return this.payload ? this.payload.name : null;
  }

  updateToken(token, decodedToken) {
    this.token = token;
    this.payload = decodedToken;
  }

  isTokenAlive() {
    const now = Date.now() / 1000;
    return this.payload.exp > now;
  }

  isTokenExpired() {
    return !this.isTokenAlive();
  }
}
