module.exports.aboutus = function(req, res){
    res.render('aboutus', { title: 'aboutus' });
  };
  /* GET menu page */
  module.exports.contact = function(req, res){
    res.render('contact', { title: 'contact' });
  };
  module.exports.reservation = function(req, res){
    res.render('reservation', { title: 'reservation' ,reservationData:[{
      name: 'John Berk',
      email: 'johnberk@example.com',
      phone: '630-013-9723',
      date: new Date('2023-09-05'),
      time: '18:30',
      guests: 2,
  }]});
  };