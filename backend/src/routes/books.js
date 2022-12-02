import { Router } from 'express'
import { getBooks, addBook, editBook, deleteBook } from '../controllers/books.js'
export const bookRouter = Router()
bookRouter.get('/books', getBooks)
bookRouter.post('/add-book', addBook)
bookRouter.put('/edit-book/:id', editBook)
bookRouter.delete('/delete-book', deleteBook)