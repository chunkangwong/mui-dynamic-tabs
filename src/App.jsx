import * as React from "react";
import "./App.css";
import WidgetList from "./components/WidgetList";
import WidgetPanel from "./components/WidgetPanel";

export const widgetsConfig = [
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

function App() {
  const [widgets, setWidgets] = React.useState(widgetsConfig);
  const [tabValue, setTabValue] = React.useState(0);

  const handleWidgetButtonClick = (id, active) => {
    const newWidgets = [...widgets];
    const widget = newWidgets.find((widget) => widget.id === id);
    if (widget) {
      widget.active = active;
      setWidgets(newWidgets);

      if (active) {
        // Switch to the tab containing the newly added widget
        setTabValue(widgets.filter((w) => w.active && w.id < id).length);
      } else {
        setTabValue(tabValue === 0 ? 0 : tabValue - 1);
      }
    }
  };

  const handleChangeTabValue = (newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="App">
      <WidgetList
        widgets={widgetsConfig}
        handleWidgetButtonClick={handleWidgetButtonClick}
      />
      <WidgetPanel
        activeWidgets={widgets.filter((w) => w.active)}
        tabValue={tabValue}
        handleChangeTabValue={handleChangeTabValue}
      />
    </div>
  );
}

export default App;
