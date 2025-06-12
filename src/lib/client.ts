const API_URL = import.meta.env.VITE_API_URL;

export async function calculate(data) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const json = await response.json();
  return json;
}
