export async function signIn(username, password) {
  return await signUpOrIn('sign-in', username, password)
}

export async function signUp(username, password) {
  return await signUpOrIn('sign-up', username, password)
}

export async function signUpOrIn(action, username, password) {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password}),
  };
  const res = await fetch(`api/auth/${action}`, req);
  if (res.status === 400) {
   const response = await res.json();
   throw new Error(response.error);
  }
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
