import React from 'react'

type ListItemType = {
        name: string,
        id: number,
        func: (arg: string)=> void,
        isLastElement: boolean,
        removedAnimalFromSelectedAnimalList: string
}

function ListItem(props: ListItemType) {
  return (
        <div
        className={`bg-yellow-50 rounded-3xl pr-3 ml-4 flex justify-between cursor-pointer gap-10 ${props.isLastElement && props.removedAnimalFromSelectedAnimalList !== '' ? "bg-green-100" : ''}`}
        key={props.id}
        >
        <span className="flex items-center">
          <span className='rounded-full bg-pink-100 w-10 h-10 flex-shrink-0'></span>
          <span className='ml-4'>{props.name}</span> 
        </span>
        <span onClick={(e) => props.func(props.name)}>X</span>
      </div>
  )
}

export default ListItem