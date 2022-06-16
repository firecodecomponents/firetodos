import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { MdAdd, MdEdit, MdPlusOne } from "react-icons/md";
import { colors } from "../COLORS";

const navBarHeight = "50px";

const NavBar = ({ setOpenDialog }) => {
  return (
    <AppBar position="static">
      <Stack
        px={1}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height={navBarHeight}
      >
        <IconButton onClick={() => setOpenDialog(true)}>
          <BiMenuAltLeft size={30} />
        </IconButton>
        <Typography variant="h5">Fire Todos</Typography>
        <Avatar></Avatar>
      </Stack>
    </AppBar>
  );
};

const drawerItems = [
  {
    label: "Home",
    icon: <IoHomeOutline />,
    page: "/home",
  },
  {
    label: "Create",
    icon: <MdAdd />,
    page: "/home",
  },
  {
    label: "Manage",
    icon: <MdEdit />,
    page: "/home",
  },
];

const TodoDrawer = ({ openDialog, setOpenDialog }) => {
  return (
    <Drawer
      open={openDialog}
      variant="temporary"
      color="primary"
      sx={{ p: 0, m: 0 }}
      onClose={() => setOpenDialog(false)}
    >
      <Stack
        alignItems="center"
        height="100%"
        width={200}
        bgcolor={colors.primary}
      >
        <Avatar sx={{ m: 2 }}></Avatar>
        <List>
          {drawerItems.map((item, index) => (
            // <Button endIcon={item.icon} key={index}>
            //   {item.label}
            // </Button>
            <MenuItem
              sx={{
                borderRadius: 1,
                mt: 2,
                width: 160,
              }}
              href="/create"
              key={index}
            >
              <Stack
                color="white"
                direction="row"
                justifyContent="space-between"
                flex={1}
              >
                <Typography mr={3}>{item.label}</Typography>
                <Icon color="white">{item.icon}</Icon>
              </Stack>
            </MenuItem>
          ))}
        </List>
      </Stack>
    </Drawer>
  );
};

const Layout = ({ children }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box>
      <TodoDrawer openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <NavBar setOpenDialog={setOpenDialog} />
      <Stack>{children}</Stack>
    </Box>
  );
};

export default Layout;
