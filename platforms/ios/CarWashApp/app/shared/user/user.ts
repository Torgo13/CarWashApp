/* This code defines a TypeScript class that defines two properties, email and password.
Instead of storing data on the AppComponent directly, it's now using the User model object,
which is reusable outside of this page and even outside of this application. */
export class User {
  email: string;
  password: string;
}
