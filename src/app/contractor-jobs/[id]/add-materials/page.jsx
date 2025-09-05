"use client";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const AddMaterials = () => {
   const router = useRouter();
  const [materialItems, setMaterialItems] = useState([
    {
      id: 1,
      materialName: "",
      modelNumber: "",
      quantityNeeded: "",
      estimatedUnitCost: "",
    },
  ]);

  const handleGoBack = () => {
    window.history.back();
  };

  const addMaterialItem = () => {
    const newId =
      materialItems.length > 0
        ? Math.max(...materialItems.map((item) => item.id)) + 1
        : 1;
    setMaterialItems([
      ...materialItems,
      {
        id: newId,
        materialName: "",
        modelNumber: "",
        quantityNeeded: "",
        estimatedUnitCost: "",
      },
    ]);
  };

  const removeMaterialItem = (id) => {
    if (materialItems.length > 1) {
      setMaterialItems(materialItems.filter((item) => item.id !== id));
    }
  };

  const updateMaterialItem = (id, field, value) => {
    setMaterialItems(
      materialItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Material Items:", materialItems);
 router.push("/")
  };

  const bid = true;

  return (
    <div className="h-screen ">
      <div
        onClick={handleGoBack}
        className="flex items-center cursor-pointer font-semibold text-lg mt-10 ml-5 md:ml-110 md:mb-10"
      >
        <MdKeyboardArrowLeft size={30} className="align-middle mt-1" />
        Add Materials
      </div>

      <div className="text-center mt-20 mb-10">
        <p className="text-xs mx-10 md:mx-0 opacity-55">
          Need additional materials to complete this job?
          <br /> Create a detailed list of required items <br /> with estimated
          costs. <br /> Once submitted, the landlord will review and approve the
          purchase request before work continues.
        </p>
      </div>

      <div className="mx-10 md:mx-120">
        {materialItems.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-6 mb-4 shadow-sm border"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">
                Material Item {index + 1}
              </h3>
              {materialItems.length > 1 && (
                <button
                  onClick={() => removeMaterialItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <FaTrash size={16} />
                </button>
              )}
            </div>

            <div className="space-y-4 md:flex gap-2">
              {/* Material Item Name */}
              <div>
                <input
                  type="text"
                  value={item.materialName}
                  onChange={(e) =>
                    updateMaterialItem(item.id, "materialName", e.target.value)
                  }
                  placeholder="Material Item Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Model or Item Number */}
              <div>
                <input
                  type="text"
                  value={item.modelNumber}
                  onChange={(e) =>
                    updateMaterialItem(item.id, "modelNumber", e.target.value)
                  }
                  placeholder="Model or Item Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-2">
                {/* Quantity Needed */}
                <div className="flex-1">
                  <input
                    type="number"
                    value={item.quantityNeeded}
                    onChange={(e) =>
                      updateMaterialItem(
                        item.id,
                        "quantityNeeded",
                        e.target.value
                      )
                    }
                    placeholder="Quantity Needed"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    min="1"
                  />
                </div>

                {/* Estimated Unit Cost */}
                <div className="flex-1">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      value={item.estimatedUnitCost}
                      onChange={(e) =>
                        updateMaterialItem(
                          item.id,
                          "estimatedUnitCost",
                          e.target.value
                        )
                      }
                      placeholder="Estimated Unit Cost"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add Material Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={addMaterialItem}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            <FaPlus size={14} />
            Add Another Material
          </button>
        </div>

        {/* Total Cost Display */}
        {materialItems.some(
          (item) => item.quantityNeeded && item.estimatedUnitCost
        ) && (
          <div className="bg-orange-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">
                Estimated Total Cost:
              </span>
              <span className="font-bold text-orange-600 text-lg">
                $
                {materialItems
                  .reduce((total, item) => {
                    const quantity = parseFloat(item.quantityNeeded) || 0;
                    const cost = parseFloat(item.estimatedUnitCost) || 0;
                    return total + quantity * cost;
                  }, 0)
                  .toFixed(2)}
              </span>
            </div>
          </div>
        )}

        {/* Next Button */}
        <div className="flex justify-center pb-10">
          <button
            onClick={handleSubmit}
            className="w-full md:w-auto px-30 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
              !materialItems.some(
                (item) =>
                  item.materialName &&
                  item.quantityNeeded &&
                  item.estimatedUnitCost
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMaterials;
