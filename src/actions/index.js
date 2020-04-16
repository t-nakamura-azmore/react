export const READ_MEMOS = "READ_MEMOS";
export const READ_MEMO = "READ_MEMO";
export const ADD_MEMO = "ADD_MEMO";
export const UPDATE_MEMO = "UPDATE_MEMO";
export const DELETE_MEMO = "DELETE_MEMO";


export const getMemos = () =>({
  type : READ_MEMOS,
});
export const getMemo = (id) =>({
  type : READ_MEMO,
  params: id,
});
export const addMemo = (values) =>({
  type : ADD_MEMO,
  params: values,
});
export const updateMemo = (id,values) =>({
  type : UPDATE_MEMO,
  id: id,
  params: values,
});
export const deleteMemo = (id) =>({
  type : DELETE_MEMO,
  params: id,
});
