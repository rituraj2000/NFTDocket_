// import { contract } from "../../web3_utils/contract";

export const createNft = async (
  customerAddr,
  tokenId,
  productId,
  imageUrl,
  expiryTime,
  sender,
  contract
) => {
  try {
    console.log(sender);
    const res = await contract.methods
      .createNFT(
        tokenId,
        imageUrl,
        productId,
        customerAddr.toLowerCase(),
        expiryTime
      )
      .send({ from: sender });
    console.log(res);
  } catch (error) {
    console.log("error at api call" + error);
  }
};

export const getSellerNfts = async (seller, contract) => {
  const res = await contract.methods.getAllSellerNfts(seller).call();
  return res;
};
