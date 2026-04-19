import LoginForm from '@/components/LoginForm';
import EmailStatusCard from '@/components/EmailStatusCard';
import { CURRENT_THEME } from '@/themes/theme.config';
import gradientStyles from '@/themes/gradient.module.css';
import minimalStyles from '@/themes/minimal.module.css';
import darkStyles from '@/themes/dark.module.css';

const themeStyles = {
  gradient: gradientStyles,
  minimal: minimalStyles,
  dark: darkStyles,
};

const styles = themeStyles[CURRENT_THEME];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Login</h1>
        <LoginForm />
      </main>
    </div>
  );
}
