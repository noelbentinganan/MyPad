import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="relative container mx-auto text-white max-w-screen-sm pt-4">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-primaryFont font-bold px-3 py-2 bg-secondaryColor rounded-lg">My Pad</h1>
                <div className="space-x-3">
                    <Link to="/create" className="font-primaryFont font-semibold  hover:bg-green-500 rounded-lg px-3 py-2">Add Note</Link>
                    <Link to="/" className="font-primaryFont font-semibold  hover:bg-secondaryColor rounded-lg px-3 py-2">Home</Link>
                </div>  
            </div>
        </nav>
     );
}
 
export default Navbar;