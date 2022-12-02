import { useDispatch, useSelector } from "react-redux";

export const useAccountsStore = () => {
  const dispatch = useDispatch;
  const { accountList } = useSelector((store) => store.account);

  return console.log("miaw");
};
