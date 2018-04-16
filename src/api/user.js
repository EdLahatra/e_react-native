import axios from 'axios';
import qs from 'qs';

import config from '../config';

export function axiosDynamique(url, method, body_json) {
  return axios({
    url: `${config.serverUrl}/${url}`,
    method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(body_json)
  }).then(res => res.data).catch(err => err);
}

export const loginApi = jsonBody => axiosDynamique('login', 'POST', jsonBody);
