import { Box } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { MdContentPasteGo, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { actionBurn } from "@/actions/action";
import { ethers } from "ethers";
import { abiWassieverse } from "@/lib/abi";

const StepInputSolana = ({
  setStepProgress,
  addressSolana,
  setAddressSolana,
  arraySelected,
  address,
}: any) => {
  const addressContractNFT =
    process.env.NEXT_PUBLIC_IS_MAINNET === "false"
      ? (process.env.NEXT_PUBLIC_ADDRESS_CONTRACT_TEST as any)
      : (process.env.NEXT_PUBLIC_ADDRESS_CONTRACT_MAIN as any);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const provider = new ethers.providers.JsonRpcProvider(
  //   process.env.NEXT_PUBLIC_IS_MAINNET === "false"
  //     ? `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_KEY_INFRA}`
  //     : `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_KEY_INFRA}`,
  //   process.env.NEXT_PUBLIC_IS_MAINNET === "false" ? "sepolia" : "homestead"
  // );
  // const provider = new ethers.providers.InfuraProvider(
  //   process.env.NEXT_PUBLIC_IS_MAINNET === "false"
  //     ? "sepolia"
  //     : "homestead",
  //   process.env.NEXT_PUBLIC_KEY_INFRA
  // );
  const signer = provider.getSigner(address);

  const contractNFT = new ethers.Contract(
    addressContractNFT,
    abiWassieverse,
    signer
  );

  const handleNextStep = async () => {
    if (address === null || address === undefined) {
      return toast.error("Please connect your wallet.");
    }
    if (
      addressSolana === null ||
      addressSolana === undefined ||
      addressSolana === ""
    ) {
      return toast.error("Input your SOL address.");
    }

    setStepProgress(3);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const selectNFTs = arraySelected.filter((each: any) => each.flagSelected);
    // console.log("selectNFTs:", selectNFTs);

    const addressBurn = process.env.NEXT_PUBLIC_ADDRESS_BURN_WALLET;

    try {
      for (var i = 0; i < selectNFTs.length; i++) {
        const resTransfer = await contractNFT.transferFrom(
          address,
          addressBurn,
          selectNFTs[i].idNFT
        );
        await resTransfer.wait();
        // console.log("resTransfer:", resTransfer);

        const resTransaction: any = await provider.getTransactionReceipt(
          resTransfer.hash
        );
        // console.log("temp:", resTransaction);

        if (resTransaction.status === 1) {
          actionBurn(resTransaction, selectNFTs[i].idNFT, addressSolana).then(
            (res) => {
              if (res.flagSuccess) {
                setStepProgress(4);
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }
            }
          );
        }

        // siging transaction, but not available in evm now.
        // const data = contractNFT.interface.encodeFunctionData(
        //   "safeTransferFrom(address,address,uint256)",
        //   [address, addressBurn, selectNFTs[i].idNFT]
        // );
        // console.log("data:", data);
        // const gasLimit = await contractNFT.estimateGas[
        //   "safeTransferFrom(address,address,uint256)"
        // ](address, addressBurn, selectNFTs[i].idNFT);
        // console.log("gasLimit:", gasLimit);
        // const gasPrice = await provider.getGasPrice();
        // console.log("gasPrice:", gasPrice);
        // const nonce = await provider.getTransactionCount(address);
        // console.log("nonce:", nonce);
        // const transaction = {
        //   from: address,
        //   to: contractNFT.address,
        //   gasLimit,
        //   gasPrice,
        //   nonce,
        //   data,
        // };
        // console.log("transaction:", transaction);
        // const signedTx = await signer.signTransaction(transaction);
        // console.log("signedTx:", signedTx);
      }
    } catch (error: any) {
      // error.shortMessage || error.message || "Error";
      console.log("error of sign transaction:", error);
    }
  };

  const handleCancelStep = () => {
    setStepProgress(1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setAddressSolana(text);
    } catch (error: any) {
      return toast.error(error);
    }
  };

  return (
    <StyledComponent>
      <TextSubject>Input your SOL Address to Transfer your NFT’s.</TextSubject>
      <TextBody>SOL Address</TextBody>
      <SectionInputSolAddress>
        <InputAddress
          as="input"
          placeholder="Paste your Solana Address"
          value={addressSolana}
          onChange={(e: any) => {
            setAddressSolana(e.target.value);
          }}
        />
        <SectionPaste onClick={() => handlePasteClipboard()}>
          <TextPaste>Paste</TextPaste>
          <IconPaste>
            <MdContentPasteGo />
          </IconPaste>
        </SectionPaste>
      </SectionInputSolAddress>
      <TextBody>Select Network</TextBody>
      <SectionSelectNetwork>
        <InputAddress as="input" placeholder="SOLANA" disabled />
        <IconSelectNetwork>
          <MdOutlineKeyboardArrowDown />
        </IconSelectNetwork>
      </SectionSelectNetwork>
      <SectionEstimateGas>
        <TextEstimateGas>Estimated Gas Fee</TextEstimateGas>
        <TextEstimateGas>0.00007 ETH</TextEstimateGas>
      </SectionEstimateGas>

      <SectionButtonStep>
        <ButtonCancel onClick={() => handleCancelStep()}>Back</ButtonCancel>
        <ButtonNext onClick={() => handleNextStep()}>Next</ButtonNext>
      </SectionButtonStep>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const TextSubject = styled(Box)`
  font-family: Gochi Hand;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  color: white;
`;

const TextBody = styled(Box)`
  margin-top: 30px;
  margin-bottom: 10px;
  font-family: Gochi Hand;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;

const SectionInputSolAddress = styled(Box)`
  display: flex;
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(51, 55, 65, 1);
  border-radius: 6px;
  padding: 0px 10px;
  box-sizing: border-box;

  transition: 0.2s;
  &:hover {
    border: 1px solid white;
    > div:nth-child(1) {
      color: white !important;
    }
  }
`;

const SectionSelectNetwork = styled(Box)`
  display: flex;
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(51, 55, 65, 1);
  border-radius: 6px;
  padding: 0px 10px;
  box-sizing: border-box;
  user-select: none;
  transition: 0.2s;

  &:hover {
    border: 1px solid white;
  }
`;

const InputAddress = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  margin-right: 20px;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0);
  font-family: Gochi Hand;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;

const SectionButtonStep = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
`;

const ButtonCancel = styled(Box)`
  display: flex;
  width: 130px;
  height: 40px;
  border: 1px solid rgba(51, 55, 65, 1);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  font-family: Gochi Hand;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  margin-right: 10px;

  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  &:hover {
    background-color: white;
    border: 1px solid white;
    color: rgba(51, 55, 65, 1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ButtonNext = styled(Box)`
  display: flex;
  width: 130px;
  height: 40px;
  background-color: rgba(255, 63, 218, 1);
  border: 1px solid rgba(255, 63, 218, 1);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  font-family: Gochi Hand;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  margin-right: 10px;

  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  &:hover {
    background-color: white;
    border: 1px solid white;
    color: rgba(255, 63, 218, 1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SectionPaste = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    > div:nth-child(1) {
      text-shadow: 0px 0px 3px rgba(255, 63, 218, 1);
    }
    > div:nth-child(2) {
      color: white;
    }
  }
`;

const TextPaste = styled(Box)`
  display: flex;
  font-family: Gochi Hand;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  transition: 0.2s;
  margin-right: 5px;
  color: rgba(255, 63, 218, 1);
`;

const IconPaste = styled(Box)`
  display: flex;
  transition: 0.2s;
  transform: rotateY(180deg);
  font-size: 20px;
  color: rgba(148, 150, 156, 1);
`;

const IconSelectNetwork = styled(Box)`
  display: flex;
  color: rgba(206, 207, 210, 1);
  font-size: 20px;
`;

const SectionEstimateGas = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const TextEstimateGas = styled(Box)`
  font-family: Gochi Hand;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(206, 207, 210, 1);
`;

export default StepInputSolana;
