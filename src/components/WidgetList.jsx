import { List, ListItemButton } from "@mui/material";

export default function WidgetList({ widgets, handleWidgetButtonClick }) {
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
