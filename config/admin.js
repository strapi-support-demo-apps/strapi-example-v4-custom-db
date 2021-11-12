module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9db76f3084936982f4dc9442ceedfa77'),
  },
});
