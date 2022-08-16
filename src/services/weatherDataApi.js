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
          "CognitoIdentityServiceProvider.7kfuq1j4ueig1k689p8uce6juq.85f34bcd-4e2d-4a1a-ac03-2a9bb0e631ef.idToken"
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
