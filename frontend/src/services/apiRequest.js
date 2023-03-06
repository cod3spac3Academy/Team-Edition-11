import { USERS_API } from "../config/urls";

export default class ApiRequest {
  static async register(body) {
    try {
      const response = await fetch(`${USERS_API}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let data = await response.json();
      console.log("data from register request:", data);
      return data;
    } catch (err) {
      console.log("error from register request:", err);
      return err;
    }
  }

  static async login(body) {
    try {
      const response = await fetch(`${USERS_API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  }

  static async update(body, id) {
    try {
      const response = await fetch(`${USERS_API}/login/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(body),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  }

  static async refresh(refreshToken) {
    try {
      const response = await fetch(`${USERS_API}/refresh`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${refreshToken}`,
        },
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  }
}
