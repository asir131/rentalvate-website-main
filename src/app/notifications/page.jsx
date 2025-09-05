import { Bell } from "lucide-react";

const dummyNotificationsData = [
  {
    _id: "1",
    title: "Contractor Assigned",
    smallDetail:
      "A contractor has been assigned to your Plumbing Issue – Bathroom Leak.",
    location: "8A Sunset Ave.",
    jobID: "#RV-10423",
  },
  {
    _id: "2",
    title: "Mark Completed – Review Needed",
    smallDetail:
      "A contractor has been assigned to your Plumbing Issue – Bathroom Leak.",
    location: "8A Sunset Ave.",
    jobID: "#RV-10423",
  },
  {
    _id: "3",
    title: "🚗 Contractor Enroute",
    smallDetail:
      "A contractor has been assigned to your Plumbing Issue – Bathroom Leak.",
    location: "8A Sunset Ave.",
    jobID: "#RV-10423",
  },
  {
    _id: "4",
    title: "📍 Contractor Arrived",
    smallDetail:
      "A contractor has been assigned to your Plumbing Issue – Bathroom Leak.",
    location: "8A Sunset Ave.",
    jobID: "#RV-10423",
  },

];
const NotificationsPage = () => {
  return (
    <section className="max-w-7xl mx-auto pt-5 px-2">
      <h1 className="font-semibold text-gray-800 text-2xl">Notifications</h1>

      {/* Today */}
      <NotificationSection title={"Today"} data={dummyNotificationsData} />
      {/* Yesterday */}
      <NotificationSection title={"Yesterday"} data={dummyNotificationsData} />
    </section>
  );
};

export default NotificationsPage;

const NotificationSection = ({ title, data }) => {
  return (
    <div className="max-w-5xl mx-auto mt-3">
      <h2 className=" text-xl text-gray-700 font-bold">{title}</h2>
      {data.slice().map((notification) => (
        <div
          key={notification._id}
          className="flex gap-4 my-4 items-center border rounded-md p-4 cursor-pointer hover:bg-orange-100"
        >
          {/* Bell icon */}
          <div className="bg-gray-200 size-10 inline-block p-2 rounded-full">
            <Bell fill="#E85D00" color="#E85D00" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl">{notification.title}</h3>
            <p className="text-gray-500 text-sm md:text-base">{notification.smallDetail}</p>
            <p className="text-gray-500 text-xs md:text-sm">{notification.location}</p>
            <p className="text-sm md:text-base">
              <span className="font-semibold">Job Id:</span>{" "}
              {notification.jobID}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
