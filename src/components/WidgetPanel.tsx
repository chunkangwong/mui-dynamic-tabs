import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { Widget } from "../App";

interface WidgetPanelProps {
  activeWidgets: Widget[];
  tabValue: number;
  handleChangeTabValue: (newValue: number) => void;
}

interface TabPanelProps {
  widgetName: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { value, widgetName, index, ...other } = props;
  const Component = React.lazy(() => import(`../widgets/${widgetName}.tsx`));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: 3 }}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Component />
        </React.Suspense>
      </Box>
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function WidgetPanel({
  activeWidgets,
  tabValue,
  handleChangeTabValue,
}: WidgetPanelProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    handleChangeTabValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {activeWidgets.map((widget, index) => (
            <Tab
              label={widget.title}
              {...a11yProps(index)}
              key={`widget-tab-${widget.id}`}
            />
          ))}
        </Tabs>
      </Box>
      {activeWidgets.map((widget, index) => (
        <TabPanel
          value={tabValue}
          index={index}
          key={`widget-panel-${widget.id}`}
          widgetName={widget.name}
        />
      ))}
    </Box>
  );
}
