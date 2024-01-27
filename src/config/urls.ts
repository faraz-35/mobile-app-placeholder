const env = process.env.EXPO_PUBLIC_NODE_ENV;
const userAPI = process.env.EXPO_PUBLIC_USER_API;

export const urls = {
  userLoginUrl: `${userAPI}/user-login`,
  userSignupUrl: `${userAPI}/userSignup`,
  addUserObjectUrl: `${userAPI}/user-object/addObject`,
  removeUserObjectUrl: `${userAPI}/user-object/removeObject`,
  getUserObjectsUrl: `${userAPI}/user-object`,
  userPasswordChangeUrl: `${userAPI}/user-management/changePassword`,
  userAccountDelete: `${userAPI}/user-management`,
};
