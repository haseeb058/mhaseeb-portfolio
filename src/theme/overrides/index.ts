import { Theme } from "@mui/material/styles";
//
import Fab from "./Fab";
import Card from "./Card";
import Tabs from "./Tabs";
import Menu from "./Menu";
import Link from "./Link";
import Lists from "./List";
import Alert from "./Alert";
import Badge from "./Badge";
import Paper from "./Paper";
import Input from "./Input";
import Radio from "./Radio";
import Drawer from "./Drawer";
import Dialog from "./Dialog";
import Avatar from "./Avatar";
import Slider from "./Slider";
import Button from "./Button";
import Switch from "./Switch";
import Select from "./Select";
import SvgIcon from "./SvgIcon";
import Tooltip from "./Tooltip";
import Popover from "./Popover";
import Stepper from "./Stepper";
import Skeleton from "./Skeleton";
import Backdrop from "./Backdrop";
import Progress from "./Progress";
import Timeline from "./Timeline";
import Typography from "./Typography";
import ToggleButton from "./ToggleButton";
import ControlLabel from "./ControlLabel";
import LoadingButton from "./LoadingButton";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Fab(theme),
    Tabs(theme),
    Card(theme),
    Menu(theme),
    Link(theme),
    Input(theme),
    Radio(theme),
    Badge(theme),
    Lists(theme),
    Paper(theme),
    Alert(theme),
    Switch(theme),
    Select(theme),
    Button(theme),
    Dialog(theme),
    Avatar(theme),
    Slider(theme),
    Drawer(theme),
    Stepper(theme),
    Tooltip(theme),
    Popover(theme),
    SvgIcon(theme),
    Skeleton(theme),
    Timeline(theme),
    Backdrop(theme),
    Progress(theme),
    Typography(theme),
    ControlLabel(theme),
    ToggleButton(theme),
    LoadingButton(theme)
  );
}
