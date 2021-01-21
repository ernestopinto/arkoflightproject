
export class ServicesConstants {
  axios;
  helpers;

  constructor(a) {
    this.axios = a;
  }

  async GET(ep, result) {
    await this.axios
      .$get(ep)
      .then((response) => {
        result(response.data);
      })
      .catch((error) => {
        //
        alert(error);
      });
  }

  async POSTFILEWITHDATA(ep, body, result) {
    await this.axios
      .$post(ep, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        result(response.data);
      }).catch(error => alert(error));
  }

  async POST(ep, body, result) {
    await this.axios
        .$post(ep, body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          result(response.data);
        }).catch(error => alert(error));
  }

}
