
const model = require('../models/walletsModel')

const Wallets = {
    getAll: async( request, reply ) => {
        const data = await model.getAll();
        return reply.status(200).send(data);
    },

    getOne: async( request, reply ) => {
        const data = await model.getById( request.params.id );
        if ( data != null && data.length > 0 ) {
            return reply.status(200).send(data[0]);
        } else {
            return reply.status(500).send({ error: "Data not found"});
        }
    }

}


/*
// Add ticket
router.post('/', (req, res) => {
    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  // Create a helpdesk ticket
  const helpdesk = new Helpdesk({
    id_req_user: req.body.id_req_user,
    category: req.body.category,
    title: req.body.title,
    request: req.body.request,
    creation_user: req.body.creation_user,
    creation_date: req.body.creation_date
  });

  // Save ticket in the database
  Helpdesk.create(helpdesk, (err, data) => {
    
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ticket."
      });
    else res.send(data);
  });
})

// Update ticket
router.patch('/:id', (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }

      Helpdesk.updateById(
        req.params.id,
        req.body,
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found ticket with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating ticket with id " + req.params.id
              });
            }
          } else res.send(data);
        }
      );
})

// Delete ticket
router.delete('/:id', (req, res) => {
    Helpdesk.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found ticket with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete ticket with id " + req.params.id
            });
          }
        } else res.send({ message: `ticket was deleted successfully!` });
      });
})


*/
module.exports = Wallets