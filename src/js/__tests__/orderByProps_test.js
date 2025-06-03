import { orderByProps } from '../orderByProps'

test ('Sorting by a given order', () => {
   const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
   expect(orderByProps(obj, ["name", "level"])).toEqual(([
    {key: "name", value: "мечник"},
    {key: "level", value: 2},
    {key: "attack", value: 80},
    {key: "defence", value: 40},
    {key: "health", value: 10}
  ]));
})

test ('Sorting by unspecified order', () => {
   const obj = {name: 'маг', health: 50, level: 6, attack: 90, defence: 150};
   expect(orderByProps(obj, [])).toEqual(([
    {key: "attack", value: 90},
    {key: "defence", value: 150},
    {key: "health", value: 50},
    {key: "level", value: 6},
    {key: "name", value: "маг"}
  ]));
})