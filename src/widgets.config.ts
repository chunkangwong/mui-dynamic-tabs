export interface Widget {
  id: number;
  title: String;
  name: string;
  active: boolean;
}

export const widgetsConfig: Widget[] = [
  {
    id: 1,
    title: "Widget 1",
    name: "Widget1",
    active: false,
  },
  {
    id: 2,
    title: "Widget 2",
    name: "Widget2",
    active: false,
  },
  {
    id: 3,
    title: "Widget 3",
    name: "Widget3",
    active: false,
  },
  {
    id: 4,
    title: "Widget 4",
    name: "Widget4",
    active: false,
  },
];
