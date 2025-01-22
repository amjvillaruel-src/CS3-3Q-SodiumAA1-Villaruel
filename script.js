const pi = 3.14;
let radius = 6.378e6;

let circumference = 2 * pi * radius;
let Area = 4 * pi * (radius * radius);
let vol = 4/3 * pi *(radius * radius * radius);

document.write ('The radius of the sphere is' + '' + radius + <br> );

document.write ('The circumference is' + '' + circumference + <br> );

document.write ('The surface area is' + '' + Area + <br> ); 

document.write ('The volume is' + '' + vol + <br> );
