import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import ColorModeComponent from "components/color-mode-component/color-mode-component";
import AzadUniversityLogo from "assets/logos/azad-university-logo.jpeg";
import { Flex, Heading, Text, Divider } from "@chakra-ui/react";

type EducationHistoryType = {
  logo: StaticImageData;
  title: string;
  college: string;
  years: string;
  divider?: boolean;
};

const EducationSection = async () => {
  const educationalHistory: EducationHistoryType[] = [
    {
      logo: AzadUniversityLogo,
      title: "B.S in Computer Engineering",
      college: "IAU (West-Tehran Branch)",
      years: "(2018-2023)",
      divider: true,
    },
    {
      logo: AzadUniversityLogo,
      title: "M.S in Computer Engineering",
      college: "IAU (South-Tehran Branch)",
      years: "(2023-Current)",
    },
  ];

  return (
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
                mainStyle={{
                  border: "2px solid",
                }}
                styles={{
                  borderRadius: "100%",
                }}
              >
                <Image
                  width={70}
                  height={60}
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
  );
};

export default EducationSection;
