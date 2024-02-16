import { Fragment } from "react";
import Image from "next/image";
import HomePageSectionMaker from "components/app/homepage-section-maker/homepage-section-maker";
import ColorModeComponent from "utils/color-mode-component/color-mode-component";
import { educationalHistory } from "constants/app/education/educational-history";
import { Flex, Text, Heading, Divider } from "@chakra-ui/react";

const Education = async () => {
  return (
    <HomePageSectionMaker label="Education">
      <Flex flexDirection="column" gap={6}>
        {educationalHistory.map((history) => (
          <Fragment key={history.title}>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              gap={{ base: 2, md: 6 }}
            >
              <Flex>
                <ColorModeComponent
                  firstColor="black"
                  secondColor="white"
                  mainStyles={{
                    border: "2px solid",
                  }}
                  styles={{
                    borderRadius: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                >
                  <Image
                    width={70}
                    height={70}
                    src={history.logo}
                    alt="Islamic Azad University's image"
                  />
                </ColorModeComponent>
              </Flex>
              <Flex width="100%" flexDirection="column" gap={2}>
                <Heading
                  size="md"
                  fontWeight="black"
                  display="inline-flex"
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent="space-between"
                  gap={2}
                >
                  {history.title}
                  <Text fontWeight="bold" fontSize={12} opacity={0.6}>
                    {history.years}
                  </Text>
                </Heading>
                <Flex flexDirection="column">
                  <Text fontSize={14} textAlign="justify" opacity={0.6}>
                    {history.college}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            {history.divider && <Divider borderWidth={2} />}
          </Fragment>
        ))}
      </Flex>
    </HomePageSectionMaker>
  );
};

export default Education;
