export default function apiCheck(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}
