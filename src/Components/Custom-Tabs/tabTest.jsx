import CustomTab from "./index.jsx";
export default function TabTest() {
  const Tabs = [
    {
      label: "Tab1",
      content: "Dream big, start small.",
    },
    {
      label: "Tab2",
      content: "Stay curious, stay inspired.",
    },
    {
      label: "Tab3",
      content: "Progress, not perfection.",
    },
    {
      label: "Tab4",
      content: "Embrace the journey.",
    },
    {
      label: "Tab5",
      content: "Ideas spark change.",
    },
    {
      label: "Tab6",
      content: "Create with passion.",
    },
  ];
  function handleChange(currentTabIndex) {}
  return <CustomTab tabsContent={Tabs} onChange={() => handleChange()} />;
}
