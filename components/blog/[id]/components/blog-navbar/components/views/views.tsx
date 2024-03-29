import ColorModeComponent from "utils/color-mode-component/color-mode-component";
import CountView from "utils/count-view/count-view";
import { getAndUpdateBlogPost } from "actions/blog";
import { Flex, Text } from "@chakra-ui/react";

type ViewsProps = {
  id: number;
};

const Views = async ({ id }: ViewsProps) => {
  const post = await getAndUpdateBlogPost({ id });

  return (
    <Flex flexDirection="column" alignItems="flex-end">
      <ColorModeComponent
        firstColor="#56585D"
        secondColor="#DEDEDE"
        mainStyles={{
          color: null,
        }}
      >
        <Text fontSize={13} display="inline-flex" alignItems="center" gap={1}>
          <CountView view={post!.view} />
        </Text>
      </ColorModeComponent>
    </Flex>
  );
};

export default Views;
