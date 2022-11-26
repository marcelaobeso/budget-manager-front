import { appendItemToAccountList } from "./accountSlice";

const addedItem = () => {
  return (dispatch, getState) => {
    // const replacedColor = {
    // 	id: 0,
    // 	name: '',
    // };
    const newAddedItem = getState().form.newAccountItem;

    // eslint-disable-next-line no-console
    dispatch(appendItemToAccountList(newAddedItem));
  };
};
export default addedItem;
