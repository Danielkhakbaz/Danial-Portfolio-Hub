import { GridItem, Skeleton, SkeletonText, Flex } from "@chakra-ui/react";

const SkeletonBlogPosts = () => {
  return [1, 2, 3].map((value: number) => (
    <GridItem key={value}>
      <Skeleton width="100%" height="145px" borderRadius="0.4rem" />
      <SkeletonText mt="4" noOfLines={1} spacing="2" />
      <Flex justifyContent="space-between" marginTop={2}>
        <SkeletonText noOfLines={1}>Loading...</SkeletonText>
        <SkeletonText noOfLines={1}>Loading...</SkeletonText>
      </Flex>
    </GridItem>
  ));
};

export default SkeletonBlogPosts;
