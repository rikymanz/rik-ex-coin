const sql = require("../database/db.js");

const Model = {
  getAll : async() => {
    const connection = await sql.connect();
    var stringRequest = "SELECT * FROM wallets";
    var result = [{}];

    try {
      result = await connection.request().query(stringRequest);
    } catch (err) {
      console.error(err)
      connection.close();
      return false
    }

    return result.recordset.length > 0 ? result.recordset : null;
  },

  getById: async function(id) {
    const connection = await sql.connect();
    var stringRequest = `SELECT * FROM wallets WHERE wallet_id = ${id}`;
    var result = [{}];

    try {
      result = await connection.request()
        .query(stringRequest);
    } catch (err) {
      console.error(err)
      connection.close();
      return false
    }
    return result.recordset.length > 0 ? result.recordset : null;
  }

}


 /*
  Helpdesk.create = (newHelpdesk, result) => {
    sql.query("INSERT INTO p03_helpdesk SET ?", newHelpdesk, (err, res) => {
      //console.log(newHelpdesk);
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created helpdesk: ", { id: res.insertId, ...newHelpdesk });
      result(null, { id: res.insertId, ...newHelpdesk });
    });
  };

  Helpdesk.updateById = (id, data, result) => {
    sql.query(
      "UPDATE p03_helpdesk SET ? WHERE id = ?",
      [data, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }

        console.log("updated customer: ", { id: id, ...data });
        result(null, { id: id, ...data });
      }
    );
  };

  Helpdesk.remove = (id, result) => {
    sql.query("DELETE FROM p03_helpdesk WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted customer with id: ", id);
      result(null, res);
    });
  };
*/
  module.exports = Model;
