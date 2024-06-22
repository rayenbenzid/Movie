import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MovieList from './MovieList'


const Home = ({setpage}) => {
    const [search, setsearch] = useState("")
    const [movies, setmovies] = useState([
        {
          image:"https://www.enwallpaper.com/wp-content/uploads/DFBC815C-13BC-4BF9-826A-C7C1930EF19A.jpeg",
          name: "Breaking bad",
          description:"Breaking Bad ou Breaking Bad : Le Chimiste1 au Québec est une série télévisée américaine en 62 épisodes de 47 minutes de moyenne, créée par Vince Gilligan, diffusée simultanément du 20 janvier 2008 au 29 septembre 2013 sur AMC aux États-Unis et au Canada, et ensuite sur Netflix.",
          rate: 8.5,
        },

        {
          image:"https://tse2.mm.bing.net/th?id=OIP.7Wr1weVWoxSEMSsZYFWLmgHaEK&pid=Api&P=0&h=180",
          name: "Peaky BLinders",
          description:"Peaky Blinders est une série télévisée britannique en 36 épisodes d'environ 55 minutes créée par Steven Knight et diffusée entre le 12 septembre 2013 et le 3 avril 2022 sur BBC Two, puis sur BBC One pour la cinquième et sixième saison. La série narre l'histoire d'une famille de criminels de la communauté de gitans, interprétée par Cillian Murphy, Helen McCrory, Paul Anderson et Joe Cole.",
          rate: 7,
        },

        {
          image:"https://www.tvguide.com/a/img/catalog/provider/1/1/1-9144071250.jpg",
          name: "Preason Break",
          description:"Prison Break ou La Grande Évasion au Canada, est un feuilleton télévisé américain en 90 épisodes de 43 minutes créé par Paul Scheuring et diffusé sur le réseau Fox entre le 29 août 2005 et 15 mai 2009. Le feuilleton revient pour une cinquième saison sous la forme d'une minisérie de neuf épisodes, intitulée Prison Break: Resurrection1,2, diffusée entre le 4 avril 20173,4,5,6,7 et le 30 mai 2017 aux États-Unis.",
          rate: 7.5,
        },

        {
          image:"https://tse4.mm.bing.net/th?id=OIP.fKUJfJ2EOglpMOXznfNcKwHaLH&pid=Api&P=0&h=180",
          name: "Bad Boys",
          description:"Bad Boys ou Mauvais garçons au Québec est une série de films américains. Elle débute avec un premier film sorti en 1995 et réalisé par Michael Bay qui reviendra également pour le second volet. Le troisième film, sorti en 2020, est mis en scène par le duo de Belges Adil El Arbi et Bilall Fallah. En janvier 2023, ils sont confirmés à la réalisation d'un 4e prévu pour 2024.",
          rate: 6,
        },

        {
          image:"https://tse4.mm.bing.net/th?id=OIP.X4wZK9DftGFn0zPmpyKYEgHaEK&pid=Api&P=0&h=180",
          name: "Outer Banks",
          description:"Dans les Outer Banks en Caroline du Nord, une bande d’adolescents appelée « Pogues » est déterminée à savoir pourquoi le père de John Booker (Chase Stokes) a mystérieusement disparu et, peu à peu, ils découvrent le trésor légendaire qu’ils avaient commencé à chercher…",
          rate: 7,
        },

        {
          image:"https://tse2.mm.bing.net/th?id=OIP.jith1RmvtbVCJBVdMTe8lgAAAA&pid=Api&P=0&h=180",
          name: "House of The Dragon",
          description:"House of the Dragon, ou La Maison du Dragon au Québec1, est une série télévisée américaine de fantasy créée par George R. R. Martin et Ryan Condal (en), qui est en cours de diffusion depuis le 21 août 20222 sur HBO3. Adaptation du roman Feu et Sang de George R. R. Martin, c'est une préquelle de la série Game of Thrones sortie en 2011. En Suisse la série est disponible sur la chaîne RTS4. Les deux show runners de la première saison étaient Ryan Condal et Miguel Sapochnik, avant que celui-ci ne quitte le projet avant la seconde saison, en 2022",
          rate: 8,
        },
      ]);

const [newmovie, setnewmovie] = useState({
  name:"",
  image:"",
  description:"",
  rate:0
})
const addmovie=()=>setmovies([...movies,newmovie])
      const [test, settest] = useState(0)      
  return (
    <div>
      <Navbar addmovie={addmovie} newmovie={newmovie} setnewmovie={setnewmovie} setsearch={setsearch} setpage={setpage} />
      <button onClick={()=>settest(test+1)} >Click</button>
      <MovieList movies={movies} search={search}  />
    </div>
  )
}

export default Home