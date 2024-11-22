import BookCard from '../../components/BookCard';
import books from '../../data/books';
import styles from './page.module.css';

export default function OurBook() {
  return (
    <div className={styles.bookGrid}>
      <h1>Koleksi Buku Kami</h1>
      <div className={styles.bookList}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}