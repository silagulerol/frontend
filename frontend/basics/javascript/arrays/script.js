//IN CONSOLE

const x = [1,2,3];

// y and x pointing same array
const y = x

// z is a copy of x, so it is pointimng somewehere else
// Spread operater ... provides SHALLOW COPY
const z = [...x]

x[0] = "Hi there"

y
x
z

x[3] = ["a","b"]

const shallow = [...x]

x[0] = "aaa"

x
shallow

//But when i change,
x[3][0] = "Dangit"

x 
shallow



