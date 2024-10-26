
const API_BASE_URL = 'https://staging-api.pomodore.in/api';

export async function authenticateUser(username, password) {
  const response = await fetch(`${API_BASE_URL}/user/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName: username, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed. Please check your credentials.');
  }

  return response.json();
}
