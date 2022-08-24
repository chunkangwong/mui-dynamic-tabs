import { Button, Typography } from "@mui/material";
import "./App.css";
import * as React from "react";
import { widgetsConfig } from "./widgets.config";
import WidgetList from "./components/WidgetList";

function App() {
  const [widgets, setWidgets] = React.useState(widgetsConfig);

  const handleWidgetButtonClick = (id: number, active: boolean) => {
    const newWidgets = [...widgets];
    const widget = newWidgets.find((widget) => widget.id === id);
    if (widget) {
      widget.active = active;
      setWidgets(newWidgets);
    }
  };

  return (
    <div className="App">
      <WidgetList
        widgets={widgetsConfig}
        handleWidgetButtonClick={handleWidgetButtonClick}
      />
    </div>
  );
}

export default App;
