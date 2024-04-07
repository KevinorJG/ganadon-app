import { environment } from "src/environments/environment";

export const AUTH_USER = 'user_auth';
export const APP_INFO = 'appInfo';
export const USER_SESSION = 'user_session';
export const APP_SERVER_URL = environment.appConfig.endpoint;
export const EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@(.+)$";