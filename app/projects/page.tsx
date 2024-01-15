import PageTransition from "components/page-transition/page-transition";
import Card from "app/projects/_components/card/card";
import { projects } from "app/projects/_constants/projects";
import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";

const ProjectsPage = async () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={6}>
        <Heading>Projects</Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {projects.map((project) => (
            <GridItem key={project.link}>
              <Card
                link={project.link}
                imageSrc={project.imageSrc}
                alt={project.alt}
                title={project.title}
                description={project.description}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </PageTransition>
  );
};

export default ProjectsPage;
