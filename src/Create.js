import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const note = { title, body };

        fetch('http://localhost:8000/notes', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note)
        }).then(() => {
            console.log('new note added');
            history.push('/');
        })
    }

    

    return ( 
        <div>
            <h2 className="text-3xl font-bold mb-4 pt-6">Add note</h2>
            <form onSubmit={ handleSubmit } className="grid grid-cols-1">
                <label className="font-primaryFont font-semibold text-2md mb-2">Note title:</label>
                <input 
                    type="text"
                    required
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) } 
                    className="bg-secondaryColor rounded-md mb-2 font-primaryFont p-2"
                />
                <label className="font-primaryFont font-semibold text-2md mb-2">Note:</label>
                <textarea
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value) }
                    className="bg-secondaryColor rounded-md mb-4 font-primaryFont p-2 h-96"
                ></textarea>
                <button className="font-primaryFont font-semibold bg-green-500 rounded-lg px-3 py-2">Add note</button>
            </form>
        </div>
     );
}
 
export default Create;