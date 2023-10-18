var express = require('express');
var router = express.Router();
var menuItemController = require('../controller/menuItem');
//var reservationController = require('../controller/reservation'); 

//menuitems
router.post('/menuItems', menuItemController.menuItemsCreate);


router.get('/menuItems', menuItemController.menuItemsList);


router.get('/menuItems/:menuitemid', menuItemController.menuItemsReadOne);


router.put('/menuItems/:menuitemid', menuItemController.menuItemsReadOne);


//reservations

router.post('/reservations', reservationController.reservationsCreate);


router.get('/reservations', reservationController.reservationsList);


router.get('/reservations/:reservationid', reservationController.reservationsReadOne);


module.exports = router;


module.exports = router;
router.get('/error', (req, res) => {
    // Define the title variable
    const title = 'Error Page'; // Replace with your desired title
    
    // Render the Jade/Pug template with the title variable
    res.render('error', { title });
  });
  