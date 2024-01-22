import Image from "next/image";
import { signOut } from "next-auth/react";
import { Link, Button } from "@chakra-ui/react";

type AuthenticatedProps = {
  data: {
    user?: {
      name?: string;
      image?: string;
    };
  };
};

const Authenticated = async ({ data }: AuthenticatedProps) => {
  return (
    <Link href="http://localhost:3000/api/auth/signout">
      <div className="avatar w-full placeholder items-center gap-4">
        <div className="w-7 bg-red-400 text-neutral-content rounded-full">
          {data.user?.image ? (
            <Image
              src={data.user?.image as string}
              alt="the user's github image"
              width={10}
              height={10}
            />
          ) : (
            <span>{data.user?.name?.slice(0, 1)}</span>
          )}
        </div>
        <Button
          onClick={async () => {
            await signOut();
          }}
        >
          Sign out
        </Button>
      </div>
    </Link>
  );
};

export default Authenticated;
