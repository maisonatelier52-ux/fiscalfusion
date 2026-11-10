export default function SectionTitle({ title }) {
  const displayTitle = title?.toLowerCase() === "us" ? "U.S. NEWS" : title?.toUpperCase();

  return (
    <div className="w-full text-center py-5">
      <h2 className="text-[45px] font-light  text-[#333]">
        {displayTitle}
      </h2>
    </div>
  );
}
