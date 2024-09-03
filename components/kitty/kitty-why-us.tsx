import React from "react";
import Image from "next/image";
import Wrapper from "../wrapper";

const KittyWhyUs = () => {
  return (
    <Wrapper>
      <div className="grid md:grid-cols-2 p-14 gap-20">
        <div className="flex justify-center items-center gap-4">
          <Image
            src="https://api.iconify.design/fluent-emoji/alarm-clock.svg"
            width={200}
            height={200}
            alt="Shopping Bags"
          />
          <div>
            <h2 className="font-semibold text-xl md:text-2xl">
              Lifetime Validity
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi inventore facere suscipit unde architecto aliquid
              mollitia molestias dicta, a molestiae!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Image
            src="https://api.iconify.design/fluent-emoji/bullseye.svg"
            width={200}
            height={200}
            alt="Shopping Bags"
          />
          <div>
            <h2 className="font-semibold text-xl md:text-2xl-">Achievements</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi inventore facere suscipit unde architecto aliquid
              mollitia molestias dicta, a molestiae!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Image
            src="https://api.iconify.design/fluent-emoji/dollar-banknote.svg"
            width={200}
            height={200}
            alt="Shopping Bags"
          />
          <div>
            <h2 className="font-semibold text-xl md:text-2xl">
              Pocket Friendly
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi inventore facere suscipit unde architecto aliquid
              mollitia molestias dicta, a molestiae!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Image
            src="https://api.iconify.design/fluent-emoji/wrapped-gift.svg"
            width={200}
            height={200}
            alt="Shopping Bags"
          />
          <div>
            <h2 className="font-semibold text-xl md:text-2xl">
              Can be sent as a Gift
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi inventore facere suscipit unde architecto aliquid
              mollitia molestias dicta, a molestiae!
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default KittyWhyUs;
