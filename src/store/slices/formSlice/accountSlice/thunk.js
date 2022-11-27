import { appendItemToAccountList } from "./accountSlice.js";

const addedItem = (itemType) => {
  return (dispatch, getState) => {
    // const replacedColor = {
    // 	id: 0,
    // 	name: '',
    // };

    const newAddedItem = getState().form.newAccountItem;

    dispatch(appendItemToAccountList(newAddedItem));
  };
};
export default addedItem;
