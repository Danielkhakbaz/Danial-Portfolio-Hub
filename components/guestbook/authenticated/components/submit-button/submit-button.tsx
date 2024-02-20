import { useFormStatus } from "react-dom";
import { Button, useColorModeValue } from "@chakra-ui/react";

const SumbitButton = async () => {
  const { pending } = useFormStatus();

  return (
    <Button
      colorScheme={useColorModeValue("purple", "yellow")}
      type="submit"
      isLoading={pending}
    >
      Submit
    </Button>
  );
};

export default SumbitButton;
