exports.success = (req,res,message,status) => {
  res.status(status || 200).send({
    error:'none',
    body:message
  });
};

exports.error = (req,res,error,status,details) => {
  console.error('[response error] '+details);

  res.status(status || 500).send({
    error:error,
    body:'none'
  });
};