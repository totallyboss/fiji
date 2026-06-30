// SHA-256 hash of the trip password
// Default password: Fiji2026!
// To change: run node -e "const c=require('crypto');console.log(c.createHash('sha256').update('YOUR_PASSWORD').digest('hex'));"
// and replace the hash below.
const CONFIG = {
  passwordHash: '07f8df1fa9d6ba3ed84832088f00d086a3caca4f4ddfe337d98e1c861c20b099',
  sessionKey: 'fiji_2026_auth',
  tripName: 'Fiji 2026',
};
