import React from 'react'
import Search from './assets/components/Search'

const App = () => {

  const [searchTerm, setSearchTerm] = React.useState('')
  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'>
        <header>
          <img src='./hero.png' alt='Hero Image' />
          <h1>Find <span className='text-gradient'>Movies</span>You'll Enjoy Without the Hassel</h1>
           
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h1 className='text-3xl text-white'>{searchTerm}</h1>
      </div>
    </main>
  )
}

export default App