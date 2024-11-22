import Image from 'next/image';
import books from '../../../data/books';
import styles from './page.module.css';

export default function BookDetail({ params }) {
  const book = books.find((b) => b.id === parseInt(params.id));

  if (!book) {
    return <div>Buku tidak ditemukan</div>;
  }

  return (
    <div className={styles.bookDetailContainer}>
      <div className={styles.bookDetailContent}>
        <Image 
          src={book.image} 
          alt={book.name} 
          width={300} 
          height={450} 
          className={styles.bookDetailImage}
        />
        <div className={styles.bookDetailInfo}>
          <h1>{book.name}</h1>
          <p className={styles.price}>Rp {book.price.toLocaleString()}</p>
          <p className={styles.description}>{book.description}</p>
          <button className={styles.buyButton}>Beli Sekarang</button>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id.toString(),
  }));
}