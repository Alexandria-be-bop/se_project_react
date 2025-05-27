import apiCheck from "./apiTools";
const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => apiCheck(res));
}

function addItems(data) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => apiCheck(res));
}


function deleteItems(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
  }).then((res) => apiCheck(res));
}

export { getItems, deleteItems, addItems };
