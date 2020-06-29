
interface IDictionary {
  ru: {
    [key: string]: any;
  },
  en: {
    [key: string]: any;
  }
}

const dictionary: IDictionary = {
  ru: {
    icon: {
      location: 'EN'
    },
    buttons: {
      save: 'Сохранить',
      download: 'Скачать резюме',
      sendMessage: 'Отправить сообщение'
    },
    menu: {
      main: 'Главная',
      about: 'Обо мне',
      skills: 'Навыки',
      contact: 'Контакты',
      components: 'Компоненты'
    },
    title: {
      hello: 'Привет!',
      head: 'Я',
      name: 'Ольга Серебрякова',
      frontendDeveloper: 'frontend разработчик'
    },
    experience: {
      title: 'Опыт работы и образование',
      experiencePlace_Gazprom: 'Газпромбанк',
      experienceDate_Gazprom: 'Ноябрь 2019 — апрель 2020',
      experienceText_Gazprom: `Финансы и кредит.
Бухгалтерский учет, анализ и аудит.`,

      experiencePlace_Frontend_school: 'Frontend school Газпромбанк',
      experienceDate_Frontend_school: 'Август - октябрь 2019',
      experienceText_Frontend_school: `Изучение JS, React, Redux`,

      experiencePlace_JavaScript: 'JavaScript.ru',
      experienceDate_JavaScript: 'Март — май 2019',
      experienceText_JavaScript: `Курс "JavaScript/​DOM/​Интерфейсы"`,

      experiencePlace_Rosneft: 'Роснефть',
      experienceDate_Rosneft: 'Август 2013-2020',
      experienceText_Rosneft: `2013 - 2017 PH-Учет - Ведущий бухгалтер
2017 - 2020 ПАО "НК-"Роснефть" - Специалист Управления делами`,

      experiencePlace_MESI: 'МЭСИ',
      experienceDate_MESI: '2008-2013',
      experienceText_MESI: `Финансы и кредит.
Бухгалтерский учет, анализ и аудит`,
    },
    contacts: {
      text: `У вас возникли вопросы, предложения или вы просто хотите сказать Привет..
Вы можете позвонить мне или отправть сообщение и я отвечу Вам в ближайшее время.`,
      title_address: 'Адресс',
      address: 'Москва',
      title_tel: 'Телефон'
    }
  },
  en: {
    icon: {
      location: 'RU'
    },
    buttons: {
      save: 'Save',
      download: 'Download resume',
      sendMessage: 'Send message'
    },
    menu: {
      main: 'Home',
      about: 'About',
      skills: 'Skills',
      contact: 'Contact',
      components: 'Components'
    },
    title: {
      hello: 'Hello!',
      head: "I'm",
      name: 'Olga Serebryakova',
      frontendDeveloper: 'a frontend developer'
    },
    experience: {
      title: 'Experience & Education ',
      experiencePlace_Gazprom: 'Gazprombank',
      experienceDate_Gazprom: 'November 2019 — April 2020',
      experienceText_Gazprom: `Finance and credit.
Accounting, analysis and audit.`,

      experiencePlace_Frontend_school: 'Frontend school Gazprombank',
      experienceDate_Frontend_school: 'August - October 2019',
      experienceText_Frontend_school: `Learning JS, React, Redux`,

      experiencePlace_JavaScript: 'JavaScript.ru',
      experienceDate_JavaScript: 'March — may 2019',
      experienceText_JavaScript: `The course "JavaScript/DOM/​Interfaces"`,

      experiencePlace_Rosneft: 'Rosneft',
      experienceDate_Rosneft: 'August 2013-2020',
      experienceText_Rosneft: `2013-2017 RN-Uchet - Lead accountant
2017-2020 Rosneft Oil Company - Expert of Administrative department`,

      experiencePlace_MESI: 'MESI',
      experienceDate_MESI: '2008-2013',
      experienceText_MESI: `Finance and credit.
Accounting, analysis and audit`,
    },
    contacts: {
      text: `If you have any suggestion, question or even you want to say Hello.. 
Please you can call me or push me a message and I will reply you shortly.`,
      title_address: 'Address',
      address: 'Moscow',
      title_tel: 'Telephone'
    }
  }
};

export const translateSelector = (localization: 'ru' | 'en') => (key: string) => {
  const keys: string[] = key.split(':');
  const targetDictionary: any = dictionary[localization];

  return keys.reduce((result: any, item: string, index: number) => {
    if (item in result) {
      return result[item];
    } else {
      console.warn(`Ошибка перевода "${key}". Поле "${item}" отстутсвует в "dictionary.${localization}.${keys.slice(0, index)}"`);
      return key;
    }
  }, targetDictionary);
}
