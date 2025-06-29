import React from "react";
import { FaCheck, FaIndianRupeeSign, FaXmark } from "react-icons/fa6";

const ServiceCard = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      hover,
      heading,
      description,
      price,
      discount,
      list,
      listHeading,
      buttonText,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    const withDiscount = React.useMemo(() => {
      return Math.round(price - (price * (discount ?? 100)) / 100);
    }, [price, discount]);

    const [result, setResult] = React.useState();
    const onFormSubmit = async (e) => {
      e.preventDefault();
      setResult("Sending...");
      const formData = new FormData(e.target);

      formData.append("access_key", "48ca363c-9cc7-4902-97cf-96aaed01991b");
      formData.append("order_item", heading);

      console.log("Form Data :: ", formData);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
      <div
        ref={ref}
        className={`rounded-[8px] border-gray-700 bg-gradient-to-br from-slate-700 to-slate-800 p-6 lg:p-8 hover:scale-[none] md:hover:scale-105 ${className}`}
        {...props}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="mb-4">
            <h3 className="mb-2 text-[18px] md:text-[24px] leading-[32px] font-semibold text-white lg:mb-4">
              {heading}
            </h3>
            <p className="text-gray-300 text-[16px]">{description}</p>
          </div>

          <div>
            <div className="mb-2 flex space-x-2">
              <span className="flex items-center text-[18px] md:text-[24px] font-extrabold text-white">
                <FaIndianRupeeSign />
                {discount ? withDiscount : price}
              </span>
              {discount && (
                <span className="text-gray-400 line-through flex items-center gap-1">
                  <FaIndianRupeeSign />
                  {price}
                </span>
              )}
            </div>

            <div className="mt-8">
              {/* <label htmlFor=""></label> */}
              <form onSubmit={onFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="flex h-9 w-full rounded-[16px] border border-gray-500 bg-transparent px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  className="flex h-9 w-full rounded-[16px] border border-gray-500 bg-transparent px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="flex h-9 w-full rounded-[16px] border border-gray-500 bg-transparent px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
                />

                <button
                  className="py-2 mt-4 rounded-[16px] w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-600 hover:to-slate-600"
                  type="submit"
                >
                  Order Now
                </button>
              </form>

              <p className="text-blue-400 mt-4 text-center flex item-center justify-between">
                {result}
                {result && (
                  <FaXmark
                    className="text-red-400"
                    onClick={() => setResult("")}
                  />
                )}
              </p>
            </div>

            {/* <ul className="mt-4 space-y-1 text-gray-200 text-[16px] leading-[24px]">
              {listHeading && <h5>{listHeading}</h5>}
              {list.map((text, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>{text}</span>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    );
  }
);

export default ServiceCard;
