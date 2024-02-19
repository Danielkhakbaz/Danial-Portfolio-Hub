import { SkeletonText } from "@chakra-ui/react";

const SkeletonView = async () => {
  return <SkeletonText noOfLines={1}>Loading....</SkeletonText>;
};

export default SkeletonView;
