const FIRST_WORDS = [
  'Саркастичный',
  'Драматичный',
  'Зловещий',
  'Приятный',
  'Восприимчивый',
  'Бессовестный',
  'Невероятный',
  'Прыгучий',
  'Заботливый',
  'Быстрый',
  'Устращающий',
  'Великолепный',
  'Уморительный',
  'Искрометный',
  'Начитанный',
  'Смышленый',
  'Одаренный',
  'Разящий',
]

const SECOND_WORDS = [
  'Енот',
  'Гепард',
  'Слизень',
  'Странник',
  'Мудрец',
  'Динозавр',
  'Комочек',
  'Пузырек',
  'Умница',
  'Джокер',
  'Баклажан',
  'Всадник',
  'Пятачок',
  'Пупсик',
  'Вепрь',
  'Орех',
  'Ящер',
  'Опоссум',
  'Мякиш',
  'Дельфин',
  'Койот',
]

const randomElement = (array) => array[Math.floor(Math.random() * array.length)]

export const generateUsername = () => {
  return randomElement(FIRST_WORDS) + randomElement(SECOND_WORDS)
}