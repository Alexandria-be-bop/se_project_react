import apiCheck from "./apiCheck";
const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => apiCheck(res));
}

function addItems(name, imageUrl, weather) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, imageUrl, weather}),
  }).then((res) => apiCheck(res));
}


function deleteItems(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
  }).then((res) => apiCheck(res));
}

export { getItems, deleteItems, addItems };
