import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import emailjs from 'emailjs-com';
import X from '../../assets/svg/X.svg';
import policy from '../../../public/policy.pdf'

interface FormData {
  name: string;
  email: string;
  tel: string;
  forma: string;
}

type IProps = {
  onClose: () => void;
};

export const FormWant = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    tel: '',
    forma: 'Хочу к вам',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isFormOpen) {
      document.body.classList.add('body-no-scroll');
      setScrollPosition(window.scrollY); // Сохраняем текущую позицию скроллинга
    } else {
      document.body.classList.remove('body-no-scroll');
      window.scrollTo(0, scrollPosition); // Восстанавливаем сохраненную позицию скроллинга
    }
    return () => {
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
        'service_nrlv0rj',
        'template_8oh2tps',
        {
          from_name: formData.name,
          from_email: formData.email,
          from_tel: formData.tel,
          from_forma: formData.forma,
        },
        'iIWzgLrMQ8RiUP4BV',
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
                <div className={styles.formTextWant}>
                  <h2>Хочу к вам</h2>
                  <p className={styles.spanWant}>Хотите работать у нас?</p>
                  <p>
                    Заполните форму и мы свяжемся с вами, чтобы обсудить варианты
                    сотрудничества.
                  </p>
                </div>
                <div>
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.formInput}>
                      Имя
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Как к Вам обращаться?"
                        required
                      />
                    </label>
                    <label className={styles.formInput}>
                      Телефон
                      <input
                        type="tel"
                        name="tel"
                        value={formData.tel}
                        onChange={handleInputChange}
                        placeholder="+7 (999) 999 99-99"
                        required
                      />
                    </label>
                    <label className={styles.formInput}>
                      Email
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@mail.ru"
                        required
                      />
                      </label>
                    <input
                        type='hidden'
                        name='hidden'
                        value={formData.forma}
                        onChange={handleInputChange}
                        placeholder='email@mail.ru'
                        required
                        />
                    <button
                      type="submit"
                      className={`${styles.formButton} ${
                        !isFormValid ? styles.formButtonDisabled : ''
                      }`}
                      disabled={!isFormValid}
                    >
                      Отправить
                    </button>
                  </form>
                  <div className={styles.private}>
                    Нажимая на кнопку "Отправить" Вы соглашаетесь <br />
                    с <a href={policy}>политикой конфиденциальности</a>
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
