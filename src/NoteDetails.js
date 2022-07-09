import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const NoteDetails = () => {
    const { id } = useParams();

    const { data: note, error } = useFetch('http://localhost:8000/notes/' + id);

    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/notes/' + note.id, {
            method: 'DELETE'
        }).then( () => {
            history.push('/');
        } )
    }

    return ( 
        <div className="py-4 my-2">
            { error && <div>{ error }</div> }
            { note && (
                <article className="font-primaryFont">
                    <h2 className="text-3xl font-bold mb-4">{ note.title }</h2>
                    <div className="py-2 my-2 px-4 bg-secondaryColor rounded-lg mb-4">{ note.body }</div>
                    <button onClick={ handleDelete } className="font-primaryFont font-semibold bg-rose-600 rounded-lg px-3 py-2">Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default NoteDetails;