import { Image, Box, Link } from "@chakra-ui/react";
import { ProjectData } from "../database/projectsData";

interface ProjectDetailProps {
  projectsData: ProjectData[];
  currentProject: number;
}
const ProjectImagePreview: React.FC<ProjectDetailProps> = ({
  projectsData,
  currentProject,
}) => {
  return (
    <Box
          position={`relative`}
          maxW={{ base: `full`, md: `100vw`, lg: `45vw` }}
          h={{ base: `30vh`, md: `300`, lg: `450` }}
          overflow={`hidden`}
          rounded={20}
        >
          <Box
            className="imgBox form-bg"
            position="absolute"
            content=""
            h="100%"
            width="100%"
            zIndex={0}
            bg={`red`}
          ></Box>
          <Link
            position={`relative`}
            h={`full`}
            w={`full`}
            display={`block`}
            href={projectsData[currentProject]?.websiteLink}
            rel="noopener"
            target="_blank"
          >
            <Box position={`relative`} top={20} left={20} h={`full`}>
              <Image
                src={projectsData[currentProject]?.desktopImage}
                w={`full`}
                h={`full`}
                alt="Project preview"
              />
            </Box>
          </Link>
        </Box>
  );
};

export default ProjectImagePreview;