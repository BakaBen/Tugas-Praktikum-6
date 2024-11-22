import Image from 'next/image';
import Link from 'next/link';
import styles from './BookCard.module.css';

const BookCard = ({ book }) => {
  return (
    <div className={styles.bookCard}>
      <Image 
        src={book.image} 
        alt={book.name} 
        width={200} 
        height={300} 
        className={styles.bookImage}
      />
      <div className={styles.bookInfo}>
        <h3>{book.name}</h3>
        <p>Rp {book.price.toLocaleString()}</p>
        <Link href={`/book/${book.id}`} className={styles.detailButton}>
          Detail Buku
        </Link>
      </div>
    </div>
  );
};

export default BookCard;