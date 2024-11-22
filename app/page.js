import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Selamat Datang di Toko Buku Online</h1>
      <p>Temukan buku favoritmu di sini!</p>
      <div className={styles.links}>
        <Link href="/our-book" className={styles.linkButton}>
          Lihat Koleksi Buku
        </Link>
        <Link href="/about" className={styles.linkButton}>
          Tentang Kami
        </Link>
      </div>
    </div>
  );
}