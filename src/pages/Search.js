import React from 'react'
import { poster } from '../datas/poster'
import SearchComponent from '../components/SearchComponent'

function SearchScreen()
{
  return (
    <div><SearchComponent data={poster}/></div>
  )
}

export default SearchScreen