import fetch from "isomorphic-unfetch";
export async function getSampleContent() {
  const response = await fetch("http://api.mocki.io/v1/95d14c41");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}
