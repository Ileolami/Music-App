import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
 
  return (
    <div className="">
      <input
        
        type="text"
        placeholder="Search..."
        className="bg-slate-900 h-12 w-64 md:w-full lg:w-96 px-5 pr-16 rounded-3xl text-slate-200 text-base focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;