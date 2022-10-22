import { Rqft } from './wrappers/rqft';

const r = new Rqft();

(async () => {
  console.log(await r.textEmojify('yo'));
})();
