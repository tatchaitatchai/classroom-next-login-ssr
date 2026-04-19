import styles from './email-status-card.module.css';

interface EmailStatusCardProps {
  email: string;
  isRead: boolean;
}

export default function EmailStatusCard({ email, isRead }: EmailStatusCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.emailSection}>
        <span className={styles.label}>Email:</span>
        <span className={styles.email}>{email}</span>
      </div>
      <div className={styles.statusSection}>
        <span className={styles.label}>Status:</span>
        <span className={`${styles.status} ${isRead ? styles.read : styles.unread}`}>
          {isRead ? 'Read' : 'Unread'}
        </span>
      </div>
    </div>
  );
}
