import React from 'react'

const search = () => {
  return (
    <div id='search'>
      <div className='search__inner'>
        
        <input 
            type='search'
            name='searchInput'
            id='searchInput'
            autoComplete='off'
            className='search__inner'
            placeholder='검색어를 입력해주세요!' />
            <label htmlFor='searchInput'>
            <span className='ir'>검색</span>
        </label>
      </div>
    </div>
  )
}

export default search
