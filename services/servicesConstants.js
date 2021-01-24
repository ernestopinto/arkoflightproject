export class ServicesConstants {
  axios;
  helpers;

  constructor(a) {
    this.axios = a;
  }

  // for async data HOOK

  async get(ep) {
    return await this.axios.$get(ep).then((response) => {
      return response.data;
    });
  }

  async post(ep, body, headers) {
    return await this.axios.$post(ep, body, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then((response) => {
        return response.data
    });
  }

    async postDataFile(ep, body, headers) {
        return await this.axios.$post(ep, body, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            return response.data
        });
    }

  // for async data HOOK

  async GET(ep, result) {
    await this.axios
      .$get(ep)
      .then((response) => {
        result(response.data);
      })
      .catch((error) => {
        //
        alert("get error -> " + error);
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
      })
      .catch((error) => alert(error));
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
      })
      .catch((error) => alert(error));
  }
}
