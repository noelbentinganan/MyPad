import NotesList from "./NotesList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: notes, error } = useFetch('http://localhost:8000/notes');

    return ( 
        <div className="pt-6">
            { error && <div>{ error }</div> }
            { notes && <NotesList notes={ notes } title="All Notes" /> }
        </div>
     );
}
 
export default Home;