import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PaletteIcon, PresentationIcon, StoreIcon } from "lucide-react";

export default function IconSectionStackedCards() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <PaletteIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Build your portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              The simplest way to keep your portfolio always up-to-date.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <PresentationIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Get freelance work</CardTitle>
            </CardHeader>
            <CardContent>
              New design projects delivered to your inbox each morning.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <StoreIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Sell your goods</CardTitle>
            </CardHeader>
            <CardContent>
              Get your goods in front of millions of potential customers with
              ease.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <StoreIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Get freelance work</CardTitle>
            </CardHeader>
            <CardContent>
              New design projects delivered to your inbox each morning.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <StoreIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Sell your goods</CardTitle>
            </CardHeader>
            <CardContent>
              Get your goods in front of millions of potential customers with
              ease.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <PaletteIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Build your portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              The simplest way to keep your portfolio always up-to-date.
            </CardContent>
          </Card>
          {/* End Card */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
