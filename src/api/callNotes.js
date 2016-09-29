import { arrayOf } from 'normalizr';
import request from 'src/api/request';
import { CallNote } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


export const listCallNotes = (auth, params = {}) => request({
  url: '/call_note/',
  method: 'GET',
  schema: arrayOf(CallNote),
  parse: parseResults,
  params,
  auth,
});


export const createCallNote = (data, auth) => request({
  url: '/call_note/',
  method: 'POST',
  schema: CallNote,
  data,
  auth,
});


export const updateCallNote = (id, data, auth) => request({
  url: `/call_note/${id}/`,
  method: 'PUT',
  schema: CallNote,
  data,
  auth,
});


export const patchCallNote = (id, data, auth) => request({
  url: `/call_note/${id}/`,
  method: 'PATCH',
  schema: CallNote,
  data,
  auth,
});
