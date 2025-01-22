const pi = 3.14;
let radius = 6.378e6;

let circumference = 2 * pi * radius;
let Area = 4 * pi * (radius * radius);
let vol = 4/3 * pi *(radius * radius * radius);

document.write ('The radius of the sphere is:' + radius );
document.write ('The circumference is:' + circumference );
document.write ('The surface area is:' + Area ); 
document.write ('The volume is:' + vol);
