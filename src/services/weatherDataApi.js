import axios from "axios";

class Api {
  errMsg = "Coudn't fetch";

  constructor(url) {
    this.apibase = url;
  }

  msg(res) {
    if (res.status === 200) return res.data;
    throw new Error(`${this.errMsg} ${this.apibase}`);
  }

  async getDataByCity(city) {
    const res = await axios.get(`${this.apibase}?city=${city}`, {
      headers: {
        Authorization: localStorage.getItem(
          "CognitoIdentityServiceProvider.36dgrj8teuk656bjcvpmm653ja.9676d6b1-f36d-42e0-8f36-d8dd27486b0f.idToken"
        ),
      },
    });
    return this.msg(res);
  }
}

const api = new Api(
  "https://9xcmgr89u7.execute-api.eu-central-1.amazonaws.com/dev/getCurrentWeather"
);

export default api;
