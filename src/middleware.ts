// Protect entire app from unauthenticated users
export { default } from "next-auth/middleware";

// Apply next-auth only to matching routes
export const config = {
    matcher: ["/extra", "dashboard"],
};
