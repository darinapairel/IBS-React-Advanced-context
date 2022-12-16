import { useDispatch, useSelector } from 'react-redux'
import {useState} from "react";
import {createSelection} from "../../actions/selection-actions";
import {isObjectEmpty, isStringEmpty} from "../../utils/utils";
import { useForm } from 'react-hook-form';


function CreateSelectionForm() {
  const dispatch = useDispatch()

  const {register, handleSubmit, errors} = useForm()

  const onSubmit = async (data) => {
    // debugger

      dispatch(
        {
          type: "CREATE_SELECTION",
          payload: {
            title: data.selectionName,
            author: data.selectionAuthor,
            email: data.selectionEmail
          }
        }
      )
  }
  return (
    <div className="create_selection_form_wrapper">
      <form className="create_selection_form row" onSubmit={handleSubmit(onSubmit)}>
        <div className="create_selection_input col-md-4" >
          <label htmlFor="selectionName" className="form-label">Selection Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="selectionName" 
            {...register('selectionName', {required: true, maxLength: 10})}
          />
          {errors?.selectionName && <span className="form_error">This field is required</span>}
        </div>
        <div className="create_selection_input col-md-4">
          <label htmlFor="selectionAuthor" className="form-label">Selection Author</label>
          <input type="text" className="form-control" id="selectionAuthor" />
          {errors?.selectionAuthor && <span className="form_error">This field is required</span>}
        </div>
        <div className="create_selection_input col-md-4">
          <label htmlFor="selectionAuthor" className="form-label">E-mail</label>
          <input 
            type="text" 
            className="form-control" 
            id="selectionAuthor"
            {...register('selectionName', {required: false})} // page 75
          />
          {errors?.selectionEmail && <span className="form_error">This field is required</span>}
        </div>
        <div className="create_selection_form_add_btn_wrapper">
          <button type="submit" className="btn btn-primary">Create selection</button>
        </div>
      </form>
    </div>
  )
}

export default CreateSelectionForm