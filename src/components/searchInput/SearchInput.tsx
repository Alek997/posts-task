import React, { ChangeEvent, useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalProvider'

interface Props {
  onChange(event: ChangeEvent<HTMLInputElement>): void
}

const SearchInput: React.FC<Props> = ({ onChange }) => {
  const { message } = useContext(GlobalContext)
  useEffect(() => {
    console.log(`${message} SearchInput`)
  }, [])
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
