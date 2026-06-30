async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function isAuthenticated() {
  return sessionStorage.getItem(CONFIG.sessionKey) === '1';
}

function setAuthenticated() {
  sessionStorage.setItem(CONFIG.sessionKey, '1');
}

function requireAuth() {
  if (!isAuthenticated()) {
    window.location.replace('index.html');
  }
}
