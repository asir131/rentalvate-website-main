// SearchInput.jsx
"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search:", searchQuery);
  };

  return (
    <div className="flex items-center gap-0 max-w-xl w-full">
      {/* input field */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          className="pl-10 pr-0 rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      {/* Search button */}
      <Button
        onClick={handleSearch}
        className="rounded-l-none bg-orange-500 hover:bg-orange-600"
      >
        Search
      </Button>
    </div>
  );
}
