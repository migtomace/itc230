var movies = [
    {Title : "Holloween", Genre : "Horror", Price : "$9.99"},
    {Title : "Deadpool", Genre : "Comedy", Price : "$13.99"},
    {Title : "Taken", Genre : "Action", Price : "$13.99"},
    {Title : "Titanic", Genre : "Drama", Price : "$9.99"},
    {Title : "Pineapple Express", Genre : "Comedy", Price : "$12.99"}
];

export function getAll(){
    for(var i = 0; i < movies.length; i++){
        return movies[i];
    }
}

export function get(movie){
    for(var i = 0; i < movies.length; i++){
        if(movies[i].Title == movie){
            return movies[i];
        }
    }
}

export function deleteFunction(movie){
    for(var i = 0; i < movies.length; i++){
        if(movies[i].Title == movie){
            movies.splice(i, 1);
            return movies;
        }
    }
}
