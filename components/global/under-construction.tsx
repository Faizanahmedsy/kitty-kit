import Image from "next/image";
import Wrapper from "../wrapper";

export default function UnderConstruction() {
  return (
    <Wrapper className="min-h-screen">
      <div className="flex justify-center flex-col items-center">
        <Image src="/f-construction.svg" alt="" height={400} width={400} />
        <div className="font-bold text-3xl">Page Under Construction</div>
      </div>
    </Wrapper>
  );
}
