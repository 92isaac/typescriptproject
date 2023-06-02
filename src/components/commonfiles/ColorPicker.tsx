export const ColorPicker = () => {
  return (
    <div className="inline">
      <h3 className="pt-3">Choose a Color</h3>
      <div className="relative w-10 h-10">
        <div className="absolute w-full h-full clip-top bg-red-300"></div>
        <div className="absolute w-full h-full clip-bottom bg-black"></div>
      </div>
    </div>
  );
};
