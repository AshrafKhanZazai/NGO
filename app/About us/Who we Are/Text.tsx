
import { Card } from "flowbite-react";
import BounceButton from "./CTAButton";

export function SpotlightPreview() {
  return (
    <div className="h-full flex justify-center items-center">
    <Card className="max-w-[70rem] flex justify-center items-center p-4 border-t-[3rem] border-l-[2rem] border-r-[2rem] border-gray-50">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Who We Are
      </h5>
<p className="">
    The Development of Afghanistan People and Social Services Organization (DAPSSO) is a non-profit organization committed to uplifting communities across Afghanistan. Established in 1994 and rebranded in 2024, DAPSSO has been at the forefront of social and economic development, implementing over 20 impactful projects. Our mission is to empower individuals through education, healthcare, vocational training, and emergency relief, ensuring sustainable progress and a brighter future for all. Through collaboration with local and international partners, we continue to drive meaningful change and improve lives across the nation.
</p>
<BounceButton />
    </Card>
    </div>
  );
}
