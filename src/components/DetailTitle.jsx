export default function Title({ title, description }) {
  const displayTitle = title?.toLowerCase() === "us" ? "U.S. NEWS" : title?.toUpperCase();

  return (
    <div className="w-full flex flex-col items-center py-5">
      <h2 className="text-[45px] font-light text-[#2f2f2f] leading-[1.1] tracking-tight text-center max-w-[800px]">
        {displayTitle}
      </h2>
      <p className="mt-2 max-w-full md:max-w-[700px] text-[#555] text-[12px] md:text-[16px] text-center leading-[1.3] tracking-tight">
        {description}
      </p>
    </div>
  );
}
