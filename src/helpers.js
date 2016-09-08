import convert from 'color-convert';
import { find, isUndefined, omitBy, isNull } from 'lodash';


export const makeGradient = (start, end, length) => {
  const s = convert.hex.rgb(start);
  const e = convert.hex.rgb(end);

  return Array.from({ length }, (v, i) => {
    const p = (i / (length - 1));
    const r = s[0] + p * (e[0] - s[0]);
    const g = s[1] + p * (e[1] - s[1]);
    const b = s[2] + p * (e[2] - s[2]);
    return `#${convert.rgb.hex(r, g, b)}`;
  });
};


export const omitNulls = d => omitBy(d, isNull);


export const trap = (type, fn) => v => v instanceof type
  ? Promise.resolve(v).then(fn)
  : Promise.reject(v);


export const switchError = cases => (e, ...xargs) => {
  const [_type, fn] = find(cases, ([type]) => e instanceof type) || [];
  return !isUndefined(fn)
    ? Promise.resolve().then(() => fn(e, ...xargs))
    : Promise.reject(e);
};


export const staticStatus = type => () => ({
  type,
});


export const dataStatus = type => details => ({
  type,
  details,
});
