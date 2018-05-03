var movies = [
    {Title : "Holloween", Genre : "Horror", Price : "$9.99"},
    {Title : "Deadpool", Genre : "Comedy", Price : "$13.99"},
    {Title : "Taken", Genre : "Action", Price : "$13.99"},
    {Title : "Titanic", Genre : "Drama", Price : "$9.99"},
    {Title : "Pineapple Express", Genre : "Comedy", Price : "$12.99"}
];

exports.getAll = () => {
    return movies;
};

exports.get = (movie) => {
    movie = movie.toLowerCase();
    for(var i = 0; i < movies.length; i++){
        if(movies[i].Title.toLowerCase() == movie){
            return movies[i];
        }
    }
};

exports.delete = (movie) => {
    movie = movie.toLowerCase();
    for(var i = 0; i < movies.length; i++){
        if(movies[i].Title.toLowerCase() == movie){
            movies.splice(i, 1);
            return movies;
        }
    }
};
