// The register function accepts the necessary data as arguments,

import { baseUrl } from "./api";
import apiCheck from "./apiCheck";

// and sends a POST request to the given endpoint.
export const register = (email, password, name, avatarUrl) => {
  return fetch(`${baseUrl}/auth/local/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatarUrl }),
  }).then((res) => apiCheck(res));
};

// The authorize function accepts the necessary data as parameters.
export const authorize = (identifier, password) => {
  // A POST request is sent to /auth/local.
  return fetch(`${BASE_URL}/auth/local`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // The parameters are wrapped in an object, converted to a JSON
    // string, and sent in the body of the request.
    body: JSON.stringify({ identifier, password }),
  }).then((res) => apiCheck(res));
};

