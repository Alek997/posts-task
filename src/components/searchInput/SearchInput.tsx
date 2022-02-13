import React, { ChangeEvent, useEffect, useState } from 'react'

interface Props {
  onChange(event: ChangeEvent<HTMLInputElement>): void
}

const SearchInput: React.FC<Props> = ({ onChange }) => {
  return (
    <div>
      <input
        style={{ width: '100%', fontSize: '2rem', padding: '1rem' }}
        placeholder="Enter Post Title"
        onChange={onChange}
      />
    </div>
  )
}

export default SearchInput
