import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  AvatarGroup,
  Button,
  Divider,
  Icon,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { StaticDatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  MdAlarm,
  MdArrowBack,
  MdArrowDropDown,
  MdStar,
  MdStarOutline,
} from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { AiOutlineSwap } from "react-icons/ai";
import { colors } from "../COLORS";
import { FaPlus } from "react-icons/fa";

const Todo = ({ element }) => {
  return (
    <Accordion variant="outlined">
      <AccordionSummary color="white">
        <Box flex={1}>
          <Stack
            my={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">{element.title}</Typography>
            <BsThreeDots size={20} />
          </Stack>
          <Button endIcon={<AiOutlineSwap />} size="small">
            {element.date.toLocaleDateString()}
          </Button>
          <Stack
            direction="row"
            mt={1}
            spacing={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" mt={1} spacing={2} alignItems="center">
              <Icon>
                <MdStarOutline />
              </Icon>
              <Stack direction="row" spacing={1} alignItems="center">
                <Icon>
                  <MdAlarm />
                </Icon>
                <Typography>{element.remembers}</Typography>
              </Stack>
            </Stack>
            <AvatarGroup>
              {element.guests.map((guest, index) => (
                <Avatar sx={{ width: 25, height: 25 }} key={index}></Avatar>
              ))}
            </AvatarGroup>
          </Stack>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0 }}>
        <Divider />
        <Stack spacing={1} divider={<Divider />} py={1}>
          {element.guests.map((guest, index) => (
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              px={2}
              key={index}
              // py={1}
            >
              <Box
                p={1.5}
                border={2}
                borderRadius={10}
                borderColor={colors.primary}
                bgcolor="#6274ad59"
              ></Box>
              <Typography flexGrow={1} variant="body1">
                {guest.task}
              </Typography>
              <Avatar sx={{ width: 25, height: 25 }}></Avatar>
            </Stack>
          ))}
        </Stack>
        <Divider />
        <MenuItem sx={{ py: 2, height: 20 }}>
          <Stack direction="row" spacing={2}>
            <Icon sx={{ ml: 0.2 }}>
              <FaPlus color={colors.primary} />
            </Icon>
            <Typography>Add Sub task</Typography>
          </Stack>
        </MenuItem>
      </AccordionDetails>
    </Accordion>
  );
};

const TodoViewer = () => {
  const [data, setdata] = useState([
    {
      title: "Todo home page",
      date: new Date(),
      remembers: 1,
      guests: [
        { name: "Jhon", lastName: "Doe", task: "Landing page desing" },
        { name: "Jane", lastName: "Doe", task: "Code landing page " },
      ],
    },
    {
      title: "Landing Page Design",
      date: new Date(),
      remembers: 2,
      guests: [
        { name: "Jhon", lastName: "Doe", task: "Add Photos" },
        { name: "Jhon", lastName: "Doe", task: "Landing page desing" },
        { name: "Jane", lastName: "Doe", task: "Code landing page " },
      ],
    },
  ]);
  const Header = () => {
    return (
      <Stack m={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <MdArrowBack />
          <Typography variant="h5">{data.title}</Typography>
          <BsThreeDots />
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack minHeight="100vh" p={2} bgcolor="#F2F2F2" spacing={2}>
      {data.map((todo, index) => (
        <Todo element={todo} key={index} />
      ))}
    </Stack>
  );
};

export default TodoViewer;
