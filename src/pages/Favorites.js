import {useContext} from 'react'
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupLists';

function FavoritesPage() {
    const favoriteCxt = useContext(FavoritesContext)
    let content
    if(favoriteCxt.favorites.length === 0){
        content = <p>You got no favorites yes. Start adding some?</p>
    }else{
        content = <MeetupList meetups={favoriteCxt.favorites}/>
    }
  return (
   <section>
       <h1>My Favorites</h1>
       {content}
   </section>
  );
}

export default FavoritesPage;
