import { Plus } from "@phosphor-icons/react";
import { faqs } from "../utils/utils";
import { useState } from "react";

const FAQs = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  function handleToggle(index) {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <div className="min-h-[512px] px-8 md:px-16 lg:px-32 flex flex-row w-full">
      <div className="w-1/2 p-8 flex flex-col gap-4">
        <h1 className="py-2">Welcome, Let&apos;s Talk About Our Ecobazar</h1>
        <div>
          {faqs.map((item, i) => (
            <div
              key={i}
              className="flex relative flex-row justify-between items-center p-4 border rounded-xl"
            >
              <div className="flex flex-col gap-2 duration-700">
                <h3>{item.question}</h3>
                {selectedIndex === i && <p>{item.answer}</p>}
              </div>

              <button
                onClick={() => handleToggle(i)}
                className="absolute right-2 top-2 bg-gray-200 p-2 rounded-xl"
              >
                <Plus className={`${selectedIndex === i ? 'rotate-45' : ''} duration-700`} size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-1/2 h-full object-contain"
      >
        <img src="/Image.png" alt="" />
      </div>
    </div>
  );
};

export default FAQs;
