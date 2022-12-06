import budgetApi from "../../../../api/budgetApi.js";
import {
  appendItemToAccountList,
  newNotDeletedAccountList,
} from "./accountSlice.js";

export const addedItem = (itemType) => {
  return (dispatch, getState) => {
    const newAddedItem = getState().account.newAccountItem;
    console.log(newAddedItem);
    dispatch(appendItemToAccountList(newAddedItem));
  };
};
export const getAllAccounts = () => {
  return async (dispatch, getState) => {
    const { userInfo } = getState().signUp;
    console.log(userInfo.idUser);
    const { data } = await budgetApi.get("/account/accounts", {
      params: { idUser: userInfo.idUser },
    });
    console.log(data.accounts);
    data.accounts
      ? dispatch(newNotDeletedAccountList(data.accounts))
      : dispatch(newNotDeletedAccountList([]));
  };
};
