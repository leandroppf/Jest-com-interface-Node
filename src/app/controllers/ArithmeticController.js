class ArithmeticController {
  sum(req, res) {
    if (!req.query.value1 || !req.query.value2) {
      return res.status(400).json({
        msg: "É necessário informar os valores 1 e 2."
      });
    }

    const { value1, value2 } = req.query;

    const result = parseInt(value1) + parseInt(value2);

    return res.json({
      result: result
    });
  }

  subtract(req, res) {
    if (!req.query.value1 || !req.query.value2) {
      return res.status(400).json({
        msg: "É necessário informar os valores 1 e 2."
      });
    }

    const { value1, value2 } = req.query;

    const result = parseInt(value1) - parseInt(value2);

    return res.json({
      result: result
    });
  }

  multiply(req, res) {
    if (!req.query.value1 || !req.query.value2) {
      return res.status(400).json({
        msg: "É necessário informar os valores 1 e 2."
      });
    }

    const { value1, value2 } = req.query;

    const result = parseInt(value1) * parseInt(value2);

    return res.json({
      result: result
    });
  }

  divide(req, res) {
    if (!req.query.value1 || !req.query.value2) {
      return res.status(400).json({
        msg: "É necessário informar os valores 1 e 2."
      });
    }

    const { value1, value2 } = req.query;

    const result = parseInt(value1) / parseInt(value2);

    return res.json({
      result: result
    });
  }

  imc(req, res) {
    if (!req.query.weight || !req.query.height) {
      res.status(400);
    }

    const weight = parseFloat(req.query.weight);
    const height = parseFloat(req.query.height);

    const result = weight / (height * height);

    res.status(200);
  }
}

module.exports = new ArithmeticController();
