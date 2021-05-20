// But here you need received the params in forms destructuring, and some paramaters defined here
const createGodzilla = ({ color, material = 'metal', weight = 200, sound, powers }) => {
  if (weight <= 200) {
    return `Godzilla has color ${color} and it material is ${material} and waight ${weight}, has soound like ${sound}, and your poower is ${powers} ${powers[0]}, ${powers[1]}`;
  }
  return `Godzilla has color ${color} and it material is ${material} and waight ${weight}, has soound like ${sound}, and your poower is ${powers[0]}`;
};

// when you send object in the function this is more scalable if you need pass other params
createGodzilla({
  color: 'blue',
  weight: 300,
  sound: 'groarr',
  powers: ['lighting', 'nuclear bomb']
});

// For example here I did not send the parameters weight
createGodzilla({
  color: 'Red',
  sound: 'plop',
  powers: ['lighting', 'nuclear']
});
