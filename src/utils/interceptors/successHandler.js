import errorHandler from "./errorHandler";

const successHandler = (response) => {
  if (response.data.success) return response.data;
  else {
    response.status = response.data.code;
    console.log('TEST RESPONSE => ',response)
    if(response.status && ![200,201].includes(response.status)) {
      return errorHandler({response})
    }
    return response;
  }
};
export default successHandler;