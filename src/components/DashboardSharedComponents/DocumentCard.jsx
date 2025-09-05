"use client"

import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const DocumentCard = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/SamplePDF.pdf';
    link.download = 'invoice.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-5xl mx-auto my-2 md:my-4 p-2 md:p-0">
      <Card>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="grow">
              <Badge className={"bg-gray-500"}>#A102</Badge>
              <p className="my-3">Leaking faucet in kitchen sink causing water wastage.</p>
              <p className="text-sm text-gray-600">Mar 27,25</p>
            </div>
            <div className={"place-self-start md:place-self-end"}>
                <Button variant={"outlineColored"} onClick={handleDownloadPDF}>Download PDF</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentCard;