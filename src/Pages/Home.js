import React, { useState } from "react";
import {
  Grid,
  Icon,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FcTodoList } from "react-icons/fc";
import { MdWorkOutline } from "react-icons/md";
import { BsEarbuds } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { RiTodoLine } from "react-icons/ri";
import { Container } from "@mui/system";

const TodoCard = ({ data }) => {
  return (
    <Paper variant="outlined">
      <Stack p={1}>
        <Icon sx={{ py: 1, color: "green" }}>{data.icon}</Icon>
        <Typography color="#A1A1A1" gutterBottom>
          {data.title}
        </Typography>
        <Typography color="GrayText" variant="caption">
          {data.number + " tasks"}
        </Typography>
      </Stack>
    </Paper>
  );
};

const Header = () => {
  return (
    <Stack my={2} spacing={1}>
      <Icon>
        <BiMenuAltLeft size={25} />
      </Icon>
      <Typography variant="h5" color="gray">
        Todos
      </Typography>
    </Stack>
  );
};

const Home = () => {
  const [tabs, settabs] = useState([
    {
      title: "All",
      number: 32,
      icon: <RiTodoLine />,
    },
    {
      title: "Work",
      number: 14,
      icon: <MdWorkOutline />,
    },
    {
      title: "Music",
      number: 9,
      icon: <BsEarbuds />,
    },
    {
      title: "Travel",
      number: 4,
      icon: <FaRegPaperPlane />,
    },
    {
      title: "Study",
      number: 8,
      icon: <GiBookshelf />,
    },
    {
      title: "Home",
      number: 7,
      icon: <IoHomeOutline />,
    },
  ]);

  return (
    <Container>
      <Header />
      <Grid container spacing={2}>
        {tabs.map((tab, index) => (
          <Grid item xs={6} sm={6} md={6}>
            <TodoCard data={tab} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
