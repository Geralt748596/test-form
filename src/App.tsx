import { Form } from './components/form';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <div className={styles.preview}>
          <h3>
            {MOCK_TITLE}
          </h3>
          <p>
            {MOCK_DESCRIPTION}
          </p>
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;

const MOCK_TITLE = 'What is Lorem Ipsum?';

const MOCK_DESCRIPTION = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
