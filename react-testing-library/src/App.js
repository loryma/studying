import React, { useEffect, useState } from 'react'; 
import './App.css';
import AlgoliaSearch from './components/AlgoliaSearch';

const getUser = () => Promise.resolve({id: 1, name: 'Mila'});

const Search = ({value, onChange, children}) => (
  <div>
    <label htmlFor="search">{children}</label>
    <input placeholder="search text..." id="search" type="text" value={value} onChange={onChange} />
  </div>
);

function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    }
    loadUser();
  }, [])

  const handleChange = ({ target }) => {
    setSearch(target.value);
  }
  return (
    <div>
      <AlgoliaSearch />
      {user && <h2>Logged in as {user.name}</h2>}
      <img src="" alt="search image" className="image" />
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

export default App;
