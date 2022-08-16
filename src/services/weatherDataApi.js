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
        Authorization: localStorage.getItem("idToken"),
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "OPTIONS,GET",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    return this.msg(res);
  }
}

const api = new Api(
  "https://9xcmgr89u7.execute-api.eu-central-1.amazonaws.com/dev/getCurrentWeather"
);

export default api;
