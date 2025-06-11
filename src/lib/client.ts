const API_URL = 'https://localhost:7174/api/calculate';
let result = null;

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
