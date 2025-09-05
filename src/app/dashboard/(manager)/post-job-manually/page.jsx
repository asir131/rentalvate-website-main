"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RouteTitle from "@/components/RouteTitle/RouteTitle";
import GlobalModal from "@/components/GlobalModal/GlobalModal";
import BiddingModal from "@/components/DashboardSharedComponents/BiddingModal";

//dummy data
const tenants = [
  {
    id: 1,
    name: "Shakil Ahmed",
    location: "Greenfield Apartments, Unit 302",
    avatarUrl: "",
  },
  {
    id: 2,
    name: "Asif Hasan",
    location: "Greenfield Apartments, Unit 302",
    avatarUrl: "",
  },
  {
    id: 3,
    name: "Sarah Khan",
    location: "Greenfield Apartments, Unit 302",
    avatarUrl: "",
  },
  {
    id: 4,
    name: "Sarah Khan",
    location: "Greenfield Apartments, Unit 302",
    avatarUrl: "",
  },
  {
    id: 5,
    name: "Sarah Khan",
    location: "Greenfield Apartments, Unit 302",
    avatarUrl: "",
  },
  {
    id: 6,
    name: "Sarah Khan",
    location: "Greenfield Apartments, Unit 302",
    avatarUrl: "",
  },
];

const PostJobManuallyPage = () => {
  const [selectedTenantId, setSelectedTenantId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTenantSelect = (tenantId) => {
    setSelectedTenantId(tenantId);
  };

  const handleNext = () => {
    if (selectedTenantId) {
      const selectedTenant = tenants.find((t) => t.id === selectedTenantId);
      console.log("Proceeding with tenant:", selectedTenant);
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <GlobalModal
        isModalOpen={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
      >
        <BiddingModal />
      </GlobalModal>
      <RouteTitle titleName={"Select Tenant"} />
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg">
        {/* Description */}
        <p className="text-sm text-gray-600 mb-6">
          Select the tenant you're creating this job post for. This ensures the
          right person stays informed and involved throughout the project.
        </p>

        {/* Tenant Cards List */}
        <div className="space-y-2 mb-8">
          {tenants.map((tenant) => (
            <TenantCard
              key={tenant.id}
              name={tenant.name}
              location={tenant.location}
              avatarUrl={tenant.avatarUrl}
              isSelected={selectedTenantId === tenant.id}
              onClick={() => handleTenantSelect(tenant.id)}
            />
          ))}
        </div>

        {/* Next Button - Only enabled when a tenant is selected */}
        <div className="flex justify-center">
          <Button
            onClick={handleNext}
            disabled={!selectedTenantId}
            className={`
         w-1/2 mx-auto py-6 text-base font-medium rounded-lg transition-all duration-200
          ${
            selectedTenantId
              ? "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
              : "bg-gray-200 text-gray-600 cursor-not-allowed hover:bg-gray-200"
          }
        `}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

const TenantCard = ({
  name,
  location,
  avatarUrl = "",
  isSelected = false,
  onClick = () => {},
}) => {
  // Generate initials from name for avatar fallback
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all duration-200
        ${
          isSelected
            ? "bg-orange-50 border border-orange-100"
            : "bg-white hover:bg-gray-50 border border-transparent"
        }
      `}
    >
      <Avatar className="w-10 h-10">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="bg-gray-700 text-white text-sm font-medium">
          {getInitials(name)}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <h3 className="font-medium text-gray-900 text-sm">{name}</h3>
        <p className="text-xs text-gray-500">{location}</p>
      </div>
    </div>
  );
};

// Export individual card component for reuse
export { TenantCard };

// Export main selection component
export default PostJobManuallyPage;
