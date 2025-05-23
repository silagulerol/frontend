const Movies = [
    {
        title:"Casablanca",
        seen:false,
        stars:null

    },
    {
        title:"The Boondock Saints",
        seen:true,
        stars:4

    },
    {
        title:"Zootopia",
        seen:true,
        stars:4.5
    }
]

function print(Movies){
    Movies.forEach((movie) => {
        if (movie.seen === true){
            console.log("You have seen " + movie.title + " and gave it " + movie.stars);
        } else {
            console.log("You have not seen " + movie.title );
        }
    })
}

print(Movies);