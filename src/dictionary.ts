
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
