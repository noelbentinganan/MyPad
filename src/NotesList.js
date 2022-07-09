import { Link } from "react-router-dom";

const NotesList = ({ notes, title }) => {
    return ( 
        <div>
            <h1 className="font-primaryFont font-semibold text-2xl py-2 my-1">{ title }</h1>
            { notes.map((note) => (
                <div className="font-primaryFont py-2 my-2 px-4 bg-secondaryColor rounded-lg" key={ note.id }>
                    <Link to={ `/notes/${ note.id }` }>
                        <h2>{ note.title }</h2>
                   </Link>
                </div>
            )) }
        </div>
     );
}
 
export default NotesList;