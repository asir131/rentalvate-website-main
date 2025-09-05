"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const RefundRequestCard = ({
  jobId = "#12456",
  issue = "Leaking faucet in kitchen sink causing water wastage.",
  quotedPrice = 250,
  materialCost = 350,
  totalCost = 350,
  refundRequest = 350,
  note = "While completing the project, there were some additional material and transportation costs that went beyond the initially approved budget. I personally covered those extra expenses to ensure the work was completed on time. I am now requesting a refund for those additional costs. I can provide receipts or other supporting documents if needed. I appreciate your kind consideration. Thank you.",
  onCancel = () => {},
  onApprove = () => {}
}) => {
  // Format currency
  const formatCurrency = (amount) => {
    return `$${amount}`;
  };

  return (
    <Card className="mx-auto p-6 bg-white rounded-lg shadow-sm my-3">
      {/* Job Details Section */}
      <div className="space-y-4 mb-6">
        {/* Job Id */}
        <div className="flex items-start">
          <span className="text-sm text-gray-600 min-w-[180px]">Job Id</span>
          <span className="text-sm text-gray-600 mx-4">:</span>
          <span className="text-sm text-gray-800 font-medium flex-1 text-right">
            {jobId}
          </span>
        </div>

        {/* Issue */}
        <div className="flex items-start">
          <span className="text-sm text-gray-600 min-w-[180px]">Issue</span>
          <span className="text-sm text-gray-600 mx-4">:</span>
          <span className="text-sm text-gray-700 flex-1 text-right">
            {issue}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4"></div>

        {/* Quoted Price */}
        <div className="flex items-start">
          <span className="text-sm text-gray-600 min-w-[180px]">Quoted Price</span>
          <span className="text-sm text-gray-600 mx-4">:</span>
          <span className="text-sm text-gray-800 flex-1 text-right">
            {formatCurrency(quotedPrice)}
          </span>
        </div>

        {/* Material Cost */}
        <div className="flex items-start">
          <span className="text-sm text-gray-600 min-w-[180px]">Material Cost</span>
          <span className="text-sm text-gray-600 mx-4">:</span>
          <span className="text-sm text-gray-800 flex-1 text-right">
            {formatCurrency(materialCost)}
          </span>
        </div>

        {/* Total Cost */}
        <div className="flex items-start">
          <span className="text-sm text-gray-600 min-w-[180px]">Total Cost</span>
          <span className="text-sm text-gray-600 mx-4">:</span>
          <span className="text-sm text-gray-800 font-medium flex-1 text-right">
            {formatCurrency(totalCost)}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4"></div>

        {/* Contractor's Refund Request */}
        <div className="flex items-start">
          <span className="text-sm text-gray-600 min-w-[180px]">
            Contractor's Refund<br />Request
          </span>
          <span className="text-sm text-gray-600 mx-4">:</span>
          <span className="text-sm text-orange-500 font-medium flex-1 text-right">
            {formatCurrency(refundRequest)}
          </span>
        </div>

        {/* Note */}
        <div className="flex items-start">
          <span className="text-sm text-gray-600 min-w-[180px]">Note</span>
          <span className="text-sm text-gray-600 mx-4">:</span>
          <div className="flex-1"></div>
        </div>

        {/* Note Content */}
        <div className="bg-gray-50 rounded-md p-4 ml-0">
          <p className="text-xs text-gray-600 leading-relaxed text-justify">
            {note}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center mt-8">
        <Button
          onClick={onCancel}
          variant="outline"
          className="px-12 py-5 bg-gray-800 hover:bg-gray-900 text-white border-0 rounded-md font-medium min-w-[140px]"
        >
          Cancel
        </Button>
        <Button
          onClick={onApprove}
          className="px-12 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium min-w-[140px]"
        >
          Approve
        </Button>
      </div>
    </Card>
  );
};

// Example usage component
const JobDetailsExample = () => {
  const handleCancel = () => {
    console.log('Cancel clicked');
    // Add your cancel logic here
  };

  const handleApprove = () => {
    console.log('Approve clicked');
    // Add your approve logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <RefundRequestCard
        onCancel={handleCancel}
        onApprove={handleApprove}
      />
    </div>
  );
};

export default RefundRequestCard;
export { JobDetailsExample };