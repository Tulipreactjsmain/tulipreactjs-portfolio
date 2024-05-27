import { Flex, Text, Box, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
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
      <Text fontSize={`medium`} fontFamily={`'Inter', sans-serif`} className="gradient-text" >
        {projectData[currentProject]?.about}
      </Text>
      <Flex gap={5} fontSize={'3xl'}>
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
    </Flex>
  );
};

export default ProjectDetail;
