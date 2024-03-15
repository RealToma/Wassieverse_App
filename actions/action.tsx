import axios from './baseURL';

export const actionBurn = (account: any) => {
  console.log("account:", account)
  return axios
    .post("/api/action/burn", {
      addressWallet: account,
    })
    .then((res) => {
      return res.data;
    });
};
