import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StaticDatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdArrowBack } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";

const TodoSummary = ({ color, date, title }) => {
  return (
    <Paper variant="outlined" sx={{ borderRadius: 3 }}>
      <Stack direction="row" alignItems="center" py={1} px={2} color="black">
        <Box
          p={2}
          border={2}
          mr={1}
          borderRadius={20}
          borderColor="#9acbc9"
          bgcolor="#c6e9e6"
        ></Box>
        <Typography flexGrow={1}>{title}</Typography>
        <Typography>{date}</Typography>
      </Stack>
    </Paper>
  );
};

const Body = () => {
  return (
    <Stack>
      <Typography variant="h5">Today, 13 June</Typography>
      <Stack my={2} spacing={2}>
        <TodoSummary title="Project Settings" date="10:00" />
        <TodoSummary title="Organize photo shoot" date="12:00" />
        <TodoSummary title="Surveys users " date="13:20" />
      </Stack>
    </Stack>
  );
};

const TodoViewer = () => {
  const [data, setdata] = useState({
    title: "All",
    number: 32,
    icon: <RiTodoLine />,
  });
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
    <Stack minHeight="100vh">
      <Box bgcolor="#3A5C9A" flex={1} color="white">
        <Header />
      </Box>
      <Box
        flex={3}
        bgcolor="white"
        sx={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        mt={-2}
        p={4}
      >
        <Body />
      </Box>
    </Stack>
  );
};

export default TodoViewer;
