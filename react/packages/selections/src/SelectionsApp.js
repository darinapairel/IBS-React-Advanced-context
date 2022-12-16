import React from 'react'
import Selection from './components/Selections/Selection';
import AddBookToSelectionForm from './components/Selections/AddBookToSelectionForm';
import CreateSelectionForm from './components/Selections/CreateSelectionForm'
import { Accordion } from 'react-bootstrap';


function SelectionsApp ({selections, books, onDelete, onCreate, onDeleteFromSelection, onAddBookToSelection, onError}) {
  return (
    <div className="wrapper selections_wrapper">
      <h2 className="page_title">Selections</h2>
      <CreateSelectionForm onCreate={onCreate}/>
      <AddBookToSelectionForm books={books} selections={selections} onAddBookToSelection={onAddBookToSelection} onError={onError} />
      { selections.data.length > 0 && (
        <Accordion>
          {selections.data.map((el,i) => {
            return <Selection key={i} item={el} itemKey={i} onDelete={onDelete} onDeleteFromSelection={onDeleteFromSelection}/>
          })}
        </Accordion>
      )}
    </div>
  )
}

export default SelectionsApp