const RightSection = () => {
  return (
    <div className="sticky top-20 hidden h-[calc(100vh-5rem)] w-52 gap-4 overflow-auto pl-2 pr-4 pt-4 xl:block">
      <h2 className="mb-4 font-bold">Right Section</h2>
      <div className="flex flex-col gap-y-4">
        <div className="cursor-pointer">
          <span className="text-sm">MM.DD.YYYY</span>
          <h3 className="text-md font-semibold">Lorem ipsum dolor sit amet, consectetur adip</h3>
        </div>
        <div className="cursor-pointer">
          <span className="text-sm">MM.DD.YYYY</span>
          <h3 className="text-md font-semibold">Lorem ipsum dolor sit amet, consectetur adip</h3>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
