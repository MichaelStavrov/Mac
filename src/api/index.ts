export function fetchMacs() {
  return window.fetch('/macs.json', { method: "GET" }).then(r => r.json());
}