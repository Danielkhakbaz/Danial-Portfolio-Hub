import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import ColorModeComponent from "utils/color-mode-component/color-mode-component";
import { Flex, Heading, Text, Divider } from "@chakra-ui/react";

type ExperiencesProps = {
  experience: {
    logo: {
      src: StaticImageData;
      alt: string;
    };
    position: string;
    company_name: string;
    location: string;
    timeline: string;
    info: string;
    descriptions: {
      paragraph: string;
    }[];
    divider?: boolean;
  };
};

const ExperinceCard = async ({ experience }: ExperiencesProps) => {
  return (
    <Fragment key={experience.company_name}>
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
            }}
          >
            <Image
              width={70}
              height={70}
              src={experience.logo.src}
              alt={experience.logo.alt}
              rel="preload"
              priority
              fetchPriority="high"
            />
          </ColorModeComponent>
        </Flex>
        <Flex
          width="100%"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Flex flexDirection="column" gap={2}>
            <Heading
              size="md"
              fontWeight="black"
              display="inline-flex"
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="space-between"
              gap={2}
            >
              {experience.position}
            </Heading>
            <Text fontWeight="bold" fontSize={13} opacity={0.8}>
              {experience.company_name}{" "}
              <Text as="span" fontWeight="normal" fontSize={10}>
                in{" "}
              </Text>
              <Text as="span">{experience.location}</Text>
            </Text>
          </Flex>
          <Flex>
            <Text fontWeight="bold" fontSize={12} opacity={0.8}>
              {experience.timeline}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap={1}>
        <Text fontWeight="bold" textAlign="justify" rel="preload">
          {experience.info}
        </Text>
        {experience.descriptions.map((description) => (
          <Text
            key={description.paragraph}
            fontWeight="bold"
            textAlign="justify"
            rel="preload"
          >
            ‣ {description.paragraph}
          </Text>
        ))}
      </Flex>
      {experience.divider && <Divider borderWidth={2} />}
    </Fragment>
  );
};

export default ExperinceCard;
