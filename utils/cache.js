import _ from 'lodash';

const cache = {};

export const cacheMemoize = (fun, cacheKey) => {
  return async (...args) => {
    const key = JSON.stringify(args);

    if (cache[cacheKey] && cache[cacheKey][key]) {
      return cache[cacheKey][key];
    }

    const res = await fun(...args);

    if (!cache[cacheKey]) {
      cache[cacheKey] = {};
    }
    cache[cacheKey][key] = res;
    return res;
  };
};
