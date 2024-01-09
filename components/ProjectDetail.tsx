import { Flex, Text, Box, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { ProjectData } from "./FeaturedProjects";

interface ProjectDetailProps {
  projectData: ProjectData[];
  currentProject: number;
  handlePrev: () => void;
  handleNext: () => void;
}
const ProjectDetail: React.FC<ProjectDetailProps> = ({
  projectData,
  currentProject,
  handlePrev,
  handleNext,
}) => {
  return (
    <Flex
      className="ProjectDetail"
      flexDirection={`column`}
      fontWeight={`bold`}
      gap={4}
      maxW={{ base: `full`, md: `350`, lg: `350` }}
    >
      <Text fontSize={`small`} className="gradient-text">
        {projectData[currentProject]?.about}
      </Text>
      <Box
        display={`flex`}
        justifyContent={`space-between`}
        alignItems={`center`}
        gap={2}
        fontSize={`2xl`}
        w={`full`}
      >
        <Flex gap={5}>
          <Link
            href={projectData[currentProject]?.githubLink}
            rel="noopener"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            href={projectData[currentProject]?.websiteLink}
            rel="noopener"
            target="_blank"
          >
            <MdLanguage />
          </Link>
        </Flex>
        <Flex gap={5}>
          {currentProject > 0 && (
            <Box onClick={handlePrev}>
              <GrLinkPrevious className="circle" />
            </Box>
          )}

          {projectData.length - 1 > currentProject && (
            <Box onClick={handleNext}>
              <GrLinkNext className="circle" />
            </Box>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProjectDetail;
