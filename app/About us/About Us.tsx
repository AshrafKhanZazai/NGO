'use client';
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { MassageOfDirector } from "../Massage";
import { Mission } from "./Mission & vision/Mission";
import { Vision } from "./Mission & vision/Vision";
import { SpotlightPreview } from "./Who we Are/Text";

export function TabsDemo() {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <Tabs aria-label="Tabs with icons" variant="underline">
      <Tabs.Item active title="Who We Are" icon={HiUserCircle}>
       <SpotlightPreview />
      </Tabs.Item>
      <Tabs.Item title="Mission" icon={MdDashboard}>
       <Mission />
      </Tabs.Item>
      <Tabs.Item title="Vision" icon={HiAdjustments}>
       <Vision />
      </Tabs.Item>
    </Tabs>
    </div>
  );
}
