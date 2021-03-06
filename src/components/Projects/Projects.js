import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from '@material-ui/core';
import projects from "./ProjectData.json";
import ProjectTemplate from "./ProjectTemplate";

const useStyles = makeStyles((theme) => ({
  cardImage: {
    width: "40%",
    height: 340,
  },
  paper: {
    backgroundColor:'#ffffffCC'
  },
  projectHeader: {
    flexGrow: 1,
    marginLeft: "15px",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  paragraphStyle: {
    marginLeft: "15px",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
      <Container>
        <Grid container direction="column" spacing="2">
          {projects.map((project, index) => {
            return (
              <ProjectTemplate classes={classes} project={project} projectNum={index}/>
            );
          })}
        </Grid>
      </Container>
  );
};

export default Projects;
