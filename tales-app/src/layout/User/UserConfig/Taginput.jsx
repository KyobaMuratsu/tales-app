import React, { useState } from 'react';

const TagInput = ({ onTagsChange }) => {
  const [tags, setTags] = useState('');

  const handleInputChange = (e) => {
    setTags(e.target.value);
  };

  const handleAddTags = () => {
    const tagArray = tags.split(',').map((tag) => tag.trim());
    onTagsChange(tagArray);
  };

  return (
    <div>
      <input type="text" value={tags} onChange={handleInputChange} />
      <button onClick={handleAddTags}>Adicionar Tags</button>
    </div>
  );
};

export default TagInput;