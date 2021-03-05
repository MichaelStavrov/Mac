export function fetchMacs() {
  return fetch('/macs.json', { method: "GET" }).then(r => r.json());
}