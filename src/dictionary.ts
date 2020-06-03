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
      cancel: 'Отмена'
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
      frontentDeveloper: 'frontend разработчик'
    }
  },
  en: {
    icon: {
      location: 'RU'
    },
    buttons: {
      save: 'Save'
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
      frontentDeveloper: 'a frontend developer'
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
