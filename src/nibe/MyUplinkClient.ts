import axios from 'axios';
import {clientCredentials} from 'axios-oauth-client';
import {Logger} from '../util/Logger';

const BASE_URL = 'https://api.myuplink.com';

export class MyUplinkClient {

  private readonly getClientCredentials;
  private accessToken;
  private accessTokenExpiration;

  constructor(
    private readonly clientId: string,
    private readonly clientSecret: string,
    private readonly log: Logger) {

    this.getClientCredentials = clientCredentials(
      axios.create(),
      BASE_URL + '/oauth/token',
      clientId,
      clientSecret,
    );
  }

  private async getAccessToken() {
    const now = new Date().getTime();
    if (!this.accessToken || !this.accessTokenExpiration || this.accessTokenExpiration.getTime() < now) {
      this.accessToken = await this.getClientCredentials('READSYSTEM WRITESYSTEM');
      this.accessTokenExpiration = new Date(now + this.accessToken.expires_in - 5*60);
    }

    return this.accessToken.access_token;
  }

  public async getUserSystems() {
    const accessToken = await this.getAccessToken();
    return axios.get(BASE_URL + '/v2/systems/me', {
      headers: {Authorization: `Bearer ${accessToken}`},
    });
  }

}