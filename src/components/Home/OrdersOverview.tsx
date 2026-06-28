import { ReactElement } from "react";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaBell, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";

interface Order {
  icon: ReactElement;
  color: string;
  title: string;
  time: string;
}

const orders: Order[] = [
  {
    icon: <FaBell />,
    color: "text-cyan-400",
    title: "$2400, Design changes",
    time: "22 DEC 7:20 PM",
  },
  {
    icon: <SiHtml5 />,
    color: "text-orange-500",
    title: "New order #4219423",
    time: "21 DEC 11:21 PM",
  },
  {
    icon: <FaShoppingCart />,
    color: "text-blue-500",
    title: "Server Payments for April",
    time: "21 DEC 9:28 PM",
  },
  {
    icon: <BsCreditCard2FrontFill />,
    color: "text-purple-600",
    title: "Unlock packages for Development",
    time: "19 DEC 11:35 PM",
  },
  {
    icon: <FaBoxOpen />,
    color: "text-purple-900",
    title: "New order #9851258",
    time: "18 DEC 4:41 PM",
  },
];

const OrdersOverview = () => {
  return (
    <div className="w-full h-full rounded-2xl bg-white p-5 shadow-md">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Orders Overview</h2>

        <p className="mt-1 text-sm">
          <span className="font-semibold text-cyan-400">30%</span>
          <span className="text-gray-500">this month.</span>
        </p>
      </div>

      <div className="space-y-7">
        {orders.map((order, index) => (
          <div key={index} className="relative flex items-start gap-4">
            <div className="relative flex flex-col items-center">
              <div className={`z-10 bg-white text-xl ${order.color}`}>
                {order.icon}
              </div>

              {index !== orders.length - 1 && (
                <div className="absolute top-7 h-14 w-[2px] bg-gray-200"></div>
              )}
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800 md:text-base">
                {order.title}
              </h3>

              <p className="mt-1 text-xs text-gray-400 md:text-sm">
                {order.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OrdersOverview;
