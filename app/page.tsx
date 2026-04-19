import LoginForm from '@/components/LoginForm';
import EmailStatusCard from '@/components/EmailStatusCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Login SSR Demo</h1>
        
        <div className={styles.section}>
          <LoginForm />
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Email Status Cards</h2>
          <div className={styles.cardsContainer}>
            <EmailStatusCard email="user1@example.com" isRead={true} />
            <EmailStatusCard email="user2@example.com" isRead={false} />
          </div>
        </div>
      </main>
    </div>
  );
}
