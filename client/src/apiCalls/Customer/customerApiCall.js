export const getCustomerNfts = async (customer, contract) => {
  try {
    const res = await contract.methods.getAllCustomerNfts(customer).call();
    return res;
  } catch (error) {
    console.log("Customer API Error" + error);
  }
};
