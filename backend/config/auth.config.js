module.exports = {
  // JWT expiration time (7 days)
  jwtExpiration: 604800,
  
  // Bcrypt salt rounds
  saltRounds: 10,
  
  // Cookie options
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  }
};