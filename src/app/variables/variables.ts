import {City} from '../models/city';

export const CITIES: Array<City> = [
  {
    id: 10,
    name: 'Алматы',
    directions: [
      {
        id: 552,
        name: 'Турция'
      },
      {
        id: 553,
        name: 'Тайланд'
      }
    ]
  },
  {
    id: 11,
    name: 'Астана',
    directions: [
      {
        id: 552,
        name: 'Турция'
      },
      {
        id: 554,
        name: 'Чехия'
      }
    ]
  }
];

export const VALIDATION_ERROR_MESSAGES = {
  date_required: 'Дата не заполнена',
  nights_required: 'Ночь от не заполнена',
  nightsTo_required: 'Ночь до не заполнена',
  nights_min: 'Ночь от маленький',
  nightsTo_min: 'Ночь до маленький',
  nights_max: 'Ночь от большой',
  nightsTo_max: 'Ночь до большой',
  date_rangeIncorrect: 'Дата не входит в диапазон',
  nightsTo_nightsLess: 'От больше чем до'
}
