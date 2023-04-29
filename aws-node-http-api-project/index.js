module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Verifique agora o amazon cognito!",
        input: event,
      },
      null,
      2
    ),
  };
};
