const express = require('express');
const { checkID, checkBody, getAlltours, createTours, deleteTour, getTour, updateTour } = require('./../controllers/tourController')

const router = express.Router();

router.param('id', checkID);

router.route('/').get(getAlltours).post(checkBody, createTours);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
