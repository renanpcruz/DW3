const operacoes = (req, res) => {
    const { num1, num2, operacao } = req.body;
    let result;
  
    switch (operacao) {
      case "+":
        result = fsoma(num1, num2);
        break;
      case "-":
        result = fsub(num1, num2);
        break;
      case "/":
        result = fdiv(num1, num2);
        break;
      case "*":
        result = fmult(num1, num2);
        break;
      default:
        return res.status(400).json({ status: "error", message: "Operação inválida" });
    }
  
    res.json({ status: "ok", resultado: result });
  };
  
  function fsoma(num1, num2) {
    return num1 + num2;
  }
  
  function fsub(num1, num2) {
    return num1 - num2;
  }
  
  function fdiv(num1, num2) {
    return num1 / num2;
  }
  
  function fmult(num1, num2) {
    return num1 * num2;
  }
  
  module.exports = {
    operacoes,
  };
  