import { arrayOf } from 'normalizr';
import request from 'src/api/request';
import { Category } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


export const listCategories = (auth, params = {}) => request({
  url: '/category/',
  method: 'GET',
  schema: arrayOf(Category),
  parse: parseResults,
  params,
  auth,
});


export const getCategory = (id, auth) => request({
  url: `/category/${id}/`,
  method: 'GET',
  schema: Category,
  auth,
});