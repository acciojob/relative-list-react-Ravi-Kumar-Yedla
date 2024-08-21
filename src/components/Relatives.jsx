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
      <ol key="relativeList">
        {List.map((listing,index) =>(
        <li key={`relativeListItem${index+1}`}>
          {listing}
        </li>
        ))}
      </ol>
    </div>
  )
}

export default Relatives
