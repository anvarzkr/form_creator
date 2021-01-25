export const EXAMPLE_FORM_CONFIG = [
  {
    name: "photo",
    type: "photo",
    label: "Фотография",
    required: true,
  },
  {
    name: "fullName",
    type: "text",
    placeholder: "Введите имя",
    label: "Имя",
    required: true,
  },
  {
    name: "age",
    type: "number",
    label: "Возраст",
    required: true,
    componentProps: {
      style: {
        width: "60px",
      },
    },
  },
  {
    name: "family_status",
    type: "select",
    placeholder: "Не выбрано",
    label: "Семейное положение",
    required: true,
    componentProps: {
      options: [
        {
          value: "not_married",
          label: "Не женат/не замужем",
        },
        {
          value: "married",
          label: "Женат/замужем",
        },
      ],
      style: {
        width: "250px",
      },
    },
  },
  {
    name: "university",
    type: "input_group",
    label: "ВУЗ",
    placeholder: "Например, ВолгГАСУ",
    description: "Укажите учебные заведения, в которых вы учились.",
    componentProps: {},
  },
  {
    name: "birth_place",
    type: "select",
    placeholder: "Не выбрано",
    label: "Место рождения",
    componentProps: {
      options: [
        {
          value: "not_specified",
          label: "Не важно",
        },
        {
          value: "abakan",
          label: "Абакан",
        },
        {
          value: "kazan",
          label: "Казань",
        },
        {
          value: "moscow",
          label: "Москва",
        },
        {
          value: "london",
          label: "Лондон",
        },
      ],
      style: {
        width: "250px",
      },
    },
  },
  {
    name: "languages",
    type: "checkbox_group",
    label: "Языки",
    description: "Выберите языки, которыми вы владеете",
    // Uncomment to make checkbox group required
    // Required means that at least one checkbox must be checked
    // required: true,
    componentProps: {
      options: [
        { label: "Английский", value: "english" },
        { label: "Русский", value: "russian" },
        { label: "Немецкий", value: "german" },
        { label: "Испанский", value: "spanish" },
        { label: "Итальянский", value: "italian" },
        { label: "Татарский", value: "tatar" },
        { label: "Румынский", value: "romanian" },
      ],
      columnsCount: 2,
    },
  },
  {
    name: "submit",
    type: "submit",
    label: "Отправить",
  },
];
