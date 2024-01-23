//no requires authentication
export const publicRoutes = ["/", "/auth/new-verification"];

// requires authentication
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
  "/auth/new-password",
];

/** 
@type {string}
*/
export const apiAuthPrefix = "/api/auth";

/**
 * the default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
