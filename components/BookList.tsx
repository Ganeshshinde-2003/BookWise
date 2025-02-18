import Image from 'next/image'
import React from 'react'

interface Props {
  title: string
  books: Book[]
  containerClassName?: string
}

const BookList = ({title, books, containerClassName}: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className='font-bebas-neue text-4xl text-light-100'>{title}</h2>

      <ul className='book-list'>
        {books.map((book) => (
          <li>
            <Image src={book.cover} alt='Book Cover' height={100} width={100} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BookList