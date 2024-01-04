import crypto from "crypto";
import { Request, Response } from "express";
import { setGlobalMetadata } from "../log/logger";

const traceabilityMiddleware = async (
  request: Request,
  _response: Response,
  next: any
) => {
  let uuid: any;

  if (request.get("Trace-id")) {
    uuid = request.get("Trace-id");
  } else {
    uuid = crypto.randomUUID();
  }

  setGlobalMetadata({ traceId: uuid });
  next();
};

export default traceabilityMiddleware;
