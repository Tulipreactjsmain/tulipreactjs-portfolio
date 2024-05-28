import { Image, Box, Link } from "@chakra-ui/react";
import { ProjectData } from "./FeaturedProjects";

interface ProjectDetailProps {
  projectData: ProjectData[];
  currentProject: number;
}
const ProjectImagePreview: React.FC<ProjectDetailProps> = ({
  projectData,
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
            href={projectData[currentProject]?.websiteLink}
            rel="noopener"
            target="_blank"
          >
            <Box position={`relative`} top={20} left={20} h={`full`}>
              <Image
                src={projectData[currentProject]?.desktopImage}
                w={`full`}
                h={`full`}
                alt="Project preview"
              />
              <Image
                src={projectData[currentProject].mobileImage}
                alt="Project preview"
                w={`20%`}
                h={{ base: `70%`, md: `70%`, lg: `60%` }}
                position={`absolute`}
                zIndex={3}
                bottom={0}
                left={15}
                loading="lazy"
              />
            </Box>
          </Link>
        </Box>
  );
};

export default ProjectImagePreview;