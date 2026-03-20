export function parseTokenPayload(token) {
  if (!token) {
    return null;
  }

  try {
    // jwt format is header.payload.signature, so i only need the middle part here
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
  // checking whether the token has an expiry time and if it is still valid now
  const payload = parseTokenPayload(token);

  if (!payload?.exp) {
    return false;
  }

  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp > currentTime;
}

export function getTokenExpiryDelay(token) {
  // this gives the remaining time in milliseconds before the token expires
  const payload = parseTokenPayload(token);

  if (!payload?.exp) {
    return 0;
  }

  return payload.exp * 1000 - Date.now();
}
