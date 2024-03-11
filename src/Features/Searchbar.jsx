const SearchBar = () => {
    return (  
        <div className="">
            <input 
            type="text" 
            placeholder="Search..."
            className=" bg-slate-900 h-14 w-80 md:w-full lg:w-96 px-5 pr-16 rounded-3xl text-slate-200 text-base lg:my-44 focus:outline-none"
            />
        </div>
    );
}
 
export default SearchBar;