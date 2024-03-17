import axios from "./baseURL";

export const actionBurn = (txHash: any) => {
  console.log("txHash:", txHash);
  return axios
    .post("/api/action/burn", {
      addressWallet: txHash,
    })
    .then((res) => {
      return res.data;
    });
};
