const express = require('express');
const {
  getAlltours,
  createTours,
  deleteTour,
  getTour,
  updateTour,
} = require('./../controllers/tourController');

const router = express.Router();

// router.param('id', checkID);

router.route('/').get(getAlltours).post(createTours);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
