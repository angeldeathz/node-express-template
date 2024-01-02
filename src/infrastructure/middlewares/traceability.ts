import crypto from "crypto";
import { Request, Response } from "express";

const traceability = async (
  request: Request,
  response: Response,
  next: any
) => {
  let uuid: any;

  if (request.get("Trace-id")) {
    uuid = request.get("Trace-id");
  } else {
    uuid = crypto.randomUUID();
  }

  response.setHeader("Trace-id", uuid);
  next();
};

export default traceability;
