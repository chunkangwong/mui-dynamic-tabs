import { List, ListItemButton } from "@mui/material";
import { Widget } from "../App";

interface WidgetListProps {
  widgets: Widget[];
  handleWidgetButtonClick: (id: number, active: boolean) => void;
}

export default function WidgetList({
  widgets,
  handleWidgetButtonClick,
}: WidgetListProps) {
  return (
    <List>
      {widgets.map((widget) => (
        <ListItemButton
          key={widget.id}
          selected={widget.active}
          onClick={() => handleWidgetButtonClick(widget.id, !widget.active)}
        >
          {widget.name}
        </ListItemButton>
      ))}
    </List>
  );
}
