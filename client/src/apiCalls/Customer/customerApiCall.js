export const get_All_CustomerNfts = async (customer, contract) => {
  try {
    const res = await contract.methods.getAllCustomerNfts(customer).call();
    return res;
  } catch (error) {
    console.log("Customer API Error" + error);
  }
};

export const claim_And_MintNft = async (tokenId, sender, contract) => {
  try {
    const res = await contract.methods
      .claimAndMintNft(tokenId)
      .send({ from: sender });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const get_warranty_details = async (tokenId, contract) => {
  try {
    const res = await contract.methods.getWarrantyDetails(tokenId).call();
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
