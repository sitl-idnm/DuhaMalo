import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import emailjs from 'emailjs-com';
import X from '../../assets/svg/X.svg';

interface FormData {
  name: string;
  email: string;
  tel: string;
}

type IProps = {
  onClose: () => void;
};

export const FormKP = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    tel: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(true);

  useEffect(() => {
    if (isFormOpen) {
      console.log('Добавляем класс body-no-scroll');
      document.body.classList.add('body-no-scroll');
    } else {
      console.log('Удаляем класс body-no-scroll');
      document.body.classList.remove('body-no-scroll');
    }
    return () => {
      console.log('Удаляем класс body-no-scroll при размонтировании');
      document.body.classList.remove('body-no-scroll');
    };
  }, [isFormOpen]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .send(
        'service_ijzb22k',
        'template_wc7618n',
        {
          from_name: formData.name,
          from_email: formData.email,
          from_tel: formData.tel,
        },
        'M8feieIbzB2iIbwFf',
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
          setIsFormSubmitted(true);
          setIsFormOpen(false);
          onClose();
        },
        (error) => {
          console.log('FAILED...', error);
          alert(
            'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',
          );
        },
      );
  };

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.tel.trim() !== '';

  const handleFormClose = () => {
    setIsFormOpen(false);
    onClose();
  };

  return (
    <>
      {isFormOpen && (
        <div className={styles.formOverlay} onClick={handleFormClose} />
      )}
      {isFormOpen && (
        <div className={styles.containerCase}>
          <div className={styles.wrapperClose}>
            <button className={styles.close} onClick={handleFormClose}>
              <img alt='' src={X} />
            </button>
          </div>
          <div className={styles.formWrapper}>
            {isFormSubmitted ? (
              <div className={styles.formSuccess}>
                <h2>Ваша заявка успешно отправлена!</h2>
                <span>Мы свяжемся с Вами в ближайшее время.</span>
              </div>
            ) : (
              <>
                <div className={styles.formText}>
                  <h2>Запросить КП</h2>
                  <span>
                    Оставьте заявку, наш менеджер свяжется с вами, чтобы собрать
                    все данные для подготовки предложения.{' '}
                  </span>
                </div>
                <div>
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.formInput}>
                      Имя
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Как к Вам обращаться?'
                        required
                      />
                    </label>
                    <label className={styles.formInput}>
                      Телефон
                      <input
                        type='tel'
                        name='tel'
                        value={formData.tel}
                        onChange={handleInputChange}
                        placeholder='+7 (999) 999 99-99'
                        required
                      />
                    </label>
                    <label className={styles.formInput}>
                      Email
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='email@mail.ru'
                        required
                      />
                    </label>
                    <button
                      type='submit'
                      className={`${styles.formButton} ${
                        !isFormValid ? styles.formButtonDisabled : ''
                      }`}
                      disabled={!isFormValid}
                    >
                      Отправить
                    </button>
                  </form>
                  <div className={styles.private}>
                    Нажимая на кнопку "Отправить" Вы соглашаетесь <br />с{' '}
                    <a href='#'>политикой конфиденциальности</a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
