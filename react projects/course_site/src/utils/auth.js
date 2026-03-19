export function parseTokenPayload(token) {
  if (!token) {
    return null;
  }

  try {
    const payload = token.split(".")[1];

    if (!payload) {
      return null;
    }

    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

export function isTokenValid(token) {
  const payload = parseTokenPayload(token);

  if (!payload?.exp) {
    return false;
  }

  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp > currentTime;
}

export function getTokenExpiryDelay(token) {
  const payload = parseTokenPayload(token);

  if (!payload?.exp) {
    return 0;
  }

  return payload.exp * 1000 - Date.now();
}
