import React, { useState, useRef } from 'react';
import Tags from './Tags';

function AppTagit() {
  const [tags, setTags] = useState(['JavaScript', 'CSS']);
  const [newTag, setNewTag] = useState(null);
  const inputRef = useRef();

  const addNewTag = () => {
    setNewTag(inputRef.current)
  }

  return (
    <div>
      <p>Add new tag:</p>
      <div>
        <input type='text' ref={inputRef} />
        <button onClick={ addNewTag }>Add</button>
      </div>
      <Tags tags={ tags } newTag={ newTag }/>
    </div>
  )
};
export default AppTagit;