import React from 'react'

const CountryFlag = ({flag,flagAlt}) => {
  return (
    <div className='country--flag--container'>
        <figure>
            <img src={flag} alt={flagAlt} />
        </figure>
    </div>
  )
}

export default CountryFlag