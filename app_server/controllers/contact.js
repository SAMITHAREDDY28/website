module.exports.aboutus = function(req, res){
    res.render('aboutus', { title: 'aboutus' });
  };
  /* GET menu page */
  module.exports.contact = function(req, res){
    res.render('contact', { title: 'contact' });
  };
  module.exports.reservation = function(req, res){
    res.render('reservation', { title: 'reservation' ,reservationData:[{
      name:"John berk",
      email:"johnberk@example.com",
      phone:"6300139723",
      date:"2023-09-05",
      time:"18:40",
      guests:4
  }]});
  };
require('./contact.js')
