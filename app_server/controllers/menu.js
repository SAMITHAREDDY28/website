module.exports.home = function(req, res){
    res.render('home', { title: 'home' });
  };
  /* GET menu page */
  module.exports.menu = function(req, res){
    res.render('menu', { title: 'menu' });
  };

  module.exports.nonveg = function(req, res){
    res.render('nonveg', { title: 'Nonveg Menu',
    
    menuItems: [
      {
        name: "chicken tikka masala",
        price: 349,
        description: "tender chicken marinated with top quality spices",
        rating: 4.5,
         
      },
      {
        name: "kebabs",
        price: 599,
        description: "made with medley of spices and grilled to perfection",
        rating: 5,
       
      },
      {
        name: "Seafood Paella",
        price: 400,
        description: "A delightful seafood medley of shrimp, mussels, and squid, cooked with saffron-infused rice and a hint of citrus.",
        rating: 4,
        
      },
      {
        name: "chicken biryani",
        price: 299,
        description: "it is a fragrant south indian dish that combines combined with aromatic basmati rice and a expertly layered and cooked with blend of spices",
        rating: 4.9,
        
      }
    ]
      
    });
  };

  module.exports.veg = function(req, res){
    res.render('veg', { title: 'veg Menu',
    menuItems : [
      {
        name: "paneer tikka masala",
        price: 350,
        description: "made with soft and tender paneer along with aromatic spices",
        rating: 4,
        
      },
      {
        name: "Vegetable Biryani",
        price: 400,
        description: "Fragrant basmati rice infused with saffron, layered with a colorful assortment of seasonal vegetables, and slow-cooked with aromatic spices. This vegetarian biryani is a celebration of flavors and textures, perfect for those seeking a wholesome meal.",
        rating: 4,
        
      },
      {
        name: "Mushroom Masala",
        price: 270,
        description: "Plump mushrooms cooked in a savory and spiced tomato-onion gravy, Mushroom Masala is a delectable option for mushroom enthusiasts. Its rich flavors and tender mushrooms create a satisfying dish.",
        rating: 4,
        
      },
      {
        name: "Vegan Pad Thai (Vegan)",
        price: 290,
        description: " A vegan twist on the Thai favorite, this dish features rice noodles stir-fried with an assortment of vegetables, tofu, and a zesty tamarind-based sauce. It's a tantalizing blend of sweet, sour, and savory flavors.",
        rating: 5,
        
      }
    ]
    });
  };

  module.exports.desert = function(req, res){
    res.render('desert', { title: 'desert Menu',
    menuItems : [
      {
        name: "Classic Tiramisu ",
        price: 280,
        description: "Indulge in layers of coffee-soaked ladyfingers and velvety mascarpone cheese, delicately dusted with cocoa powder. Our Classic Tiramisu is a timeless Italian dessert that combines rich flavors and a light, creamy texture for a delightful after-meal treat.",
        rating: 5,
        
      },
      {
        name: " Gulab Jamun",
        price: 200,
        description: "Gulab Jamun is a delectable Indian dessert featuring golden, syrup-soaked dough balls with a delightful blend of sweetness and aromatic flavors, often served on special occasions and celebrations.",
        rating: 4,
       
      },
      {
        name: "Raspberry White Chocolate Cheesecake",
        price: 270,
        description: "Delight in the harmonious pairing of tangy raspberries and smooth white chocolate in our Cheesecake. The velvety cheesecake sits atop a buttery graham cracker crust, creating a dessert that's both visually appealing and delectably flavorful.",
        rating: 4,
        
      },
      {
        name: "Molten Chocolate Lava Cake",
        price: 290,
        description:"A decadent dessert experience awaits with our Molten Chocolate Lava Cake. As you cut into the warm cake, a luscious river of molten chocolate flows, complementing the moist chocolate cake exterior. Served with a scoop of vanilla ice cream for an extra touch of sweetness.",
        rating: 5,
        
      }
    ]
   });
  };

  