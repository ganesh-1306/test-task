import Image from "next/image";
import data from "../../data.json";
export default function Summary() {
  return (
    <>
    {data.map((item: any, index: any) =>
      <div key={index} className={`flex items-center justify-between p-4 rounded-xl mb-6 ${item.bgColor}`} style={{background: item.bgColor}}>
        <div className="flex gap-2">
          <Image
            src={item.icon}
            alt={item.category}
            width={24}
            height={24}
          />
          <h2 className={`text-xl font-medium`} style={{color: item.textColor}}>
            {item.category}
          </h2>
        </div>
        <div className="">
          <p className="text-xl font-bold text-[#303b5a]">{item.score} <span className="text-[#a6a3af]">/ 100</span></p>
          </div>
      </div>
    )}
    </>
  )
}