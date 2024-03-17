import axios from "./baseURL";

export const actionBurn = (
  dataTransaction: any,
  idNFT: any,
  addressSolana: any
) => {
  console.log("dataTx:", dataTransaction);
  return axios
    .post("/api/action/burn", {
      dataTransaction: dataTransaction,
      NFTID: idNFT,
      addressSolana: addressSolana,
    })
    .then((res) => {
      return res.data;
    });
};
