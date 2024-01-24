const env = process.env.EXPO_PUBLIC_NODE_ENV;
const userAPI = process.env.EXPO_PUBLIC_USER_API;
const baseUrl = userAPI;

export const urls = {
  userLoginUrl: `${baseUrl}/user-login`,
  userSignupUrl: `${baseUrl}/userSignup`,
};
