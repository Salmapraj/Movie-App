import { createContext,useState,useContext,useEffect} from "react";

const MovieContext = createContext()
//custom hook
export const useMovieContext =()=> useContext(MovieContext)

//component
export const MovieProvider= ({children})=>{
const [favourites,setFavourites] = useState([])
  const [loaded, setLoaded] = useState(false); // ✅ Track if localStorage has been loaded

useEffect(()=>{
    const storedFav = localStorage.getItem("favourites")
    if(storedFav){
        setFavourites(JSON.parse(storedFav))
    }
    setLoaded(true)
},[])


// [{id: 1, title: "Inception"}] → "[{"id":1,"title":"Inception"}]"
useEffect(()=>{
    if(loaded) localStorage.setItem("favourites",JSON.stringify(favourites))
},[favourites,loaded])


const addToFav = (movie)=>{
setFavourites((prev)=>[...prev,movie])
}

const removeFav =(movieiId)=>{
setFavourites((prev)=>prev.filter((item)=>item.id !==movieiId))
}

const isFav=(movieId)=>{
return favourites.some(item => item.id ===movieId)
}


//values to be provided to children as prop in .PRovider
const value ={
    favourites,
    addToFav,
    removeFav,
    isFav
}

    return(<MovieContext.Provider  value={value}>
        {children}
    </MovieContext.Provider>)
}
