export class AppError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = Error.name;
    this.status = status || 500;
    Error.captureStackTrace(this);
  }
}
