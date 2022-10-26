const res = require("express/lib/response");
const mysql = require("mysql2");
const mysqlConfig = require("../config/mysqlConfig");

const connection = mysql.createConnection(mysqlConfig);

const insertOrder = (req, res) => {
  const body = req.body;
  const sql =
    "INSERT INTO Pedido (folio, hora, nombreCompleto, telefono, paquete, polloRelleno, lomo, pierna, costilla, polloAdobado, polloNatural, manzana, espaguetti, codo, rusa, chiles, otros, total, anticipo, resta, entregado, pagado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(
        sql,
        [body.folio, body.hora, body.nombreCompleto, body.telefono, body.paquete, body.polloRelleno, body.lomo, body.pierna, body.costilla, body.polloAdobado, body.polloNatural, body.manzana, body.espaguetti, body.codo, body.rusa, body.chiles, body.otros, body.total, body.anticipo, body.resta, body.entregado, body.pagado],
        (err, result, fields) => {
            if (err) {
                res.status(500).send(err);
                return false;
            } else {
                res.status(200).send('Order inserted successfully');
                return true;
            }
        }
    );
};

const getAllOrders = (req, res) => {
  const sql = "SELECT * FROM Pedido";

  connection.query(sql, (err, result, fields) => {
    if (err) {
      res.send(err);
      return false;
    } else {
      res.status(200).json(result);
      return true;
    }
  });
};

module.exports = { insertOrder, getAllOrders };
