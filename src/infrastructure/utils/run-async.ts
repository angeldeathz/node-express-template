function runAsync(callback: any) {
  return function (req: any, res: any, next: any) {
    callback(req, res, next).catch(next);
  };
}

export default runAsync;
