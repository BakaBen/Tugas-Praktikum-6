import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>Tentang Saya</h1>
      <div className={styles.profileInfo}>
        <h2>Nama: Rubben Christiano</h2>
        <h3>NRP: 231131005</h3>
        <h3>Contact: (+62)812-3456-7890</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis diam consequat mauris tincidunt maximus. Proin suscipit massa sit amet magna imperdiet, vel mattis nisl varius. Cras vehicula augue in lacus placerat lacinia.</p>
      </div>
    </div>
  );
}