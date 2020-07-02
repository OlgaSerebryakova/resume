
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
