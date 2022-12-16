import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CreateBookForm from '../components/Books/CreateBookForm';
// import {store} from '../store'

describe('Test CreateBookForm', ()=>{
  const dispatchMock = jest.fn()
  const subscribe = jest.fn()
  const store = {getState: jest.fn(), dispactch: dispatchMock, subscribe: subscribe}
  // jest.mock('../store', store)
  it('tests create books', async()=>{
    const utils = render(<Provider store={store}><CreateBookForm /></Provider>)
    const bookName = await utils.findByLabelText('Book Title')
    const bookAuthor = await utils.findByLabelText('Book Author')
    // const createButton = await utils.findByTestId('create_book_button');

    fireEvent.change(bookName, {target: {value: 'Forrest Gump'}})
    fireEvent.change(bookAuthor, { target: { value: 'Eric Roth' } })
    // fireEvent.click(createButton)

    expect(bookName.value).toBe('Forrest Gump')
    expect(bookAuthor.value).toBe('Eric Roth')

    // expect(dispatchMock).toBeCalled()

    // expect(bookName.value).toBe('')
    // expect(bookAuthor.value).toBe('')
  })
})