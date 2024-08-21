import React from 'react'

const List = [
    "Uncle john",
    "Aunt lia",
    "Sister lisa",
    "Brother Mony"
]

const Relatives = () => {
  return (
    <div>
      <ol key="RelativeList">
        {List.map((listing,index) =>(
        <li key={`RelativeListItem${index+1}`}>
          {listing}
        </li>
        ))}
      </ol>
    </div>
  )
}

export default Relatives
