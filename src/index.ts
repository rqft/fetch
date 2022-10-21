import { Rqft } from './wrappers/rqft';

const r = new Rqft();

(async () => {
  const req = await r.origin();
  const { data } = req.unwrap();
  console.log(data);
})();
