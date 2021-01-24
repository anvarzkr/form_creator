##### Starting development server

1. yarn
2. yarn start

##### Form config

#

| Parameter name | Description                                                                                                                                                                                           | Type    |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| name\*         | input's unique identifier. Will be used as a key in result form values object                                                                                                                         | string  |
| type\*         | Could be **text**, **number**, **select**, **checkbox**, **checkbox_group**, **input_group**, **photo** or **submit**. Example of each type could be found in example app in **customConstants** file | string  |
| description    | description of an input. Will be displayed under the component                                                                                                                                        | string  |
| label          | Text label of an input                                                                                                                                                                                | string  |
| required       | Determines if an input is required to be filleed in order to submit a form                                                                                                                            | boolean |
| placeholder    | Sets up input's placeholder if component has such ability                                                                                                                                             | string  |
| componentProps | Pushes any other extra props to a component (e.g. **styles** for any component, **options** for _select_ and _checkbox_group_, **columnsCount** for _checkbox_group_)                                 | object  |
