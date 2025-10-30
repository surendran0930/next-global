"use client";
import HistoryTable from "@/components/HistoryTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

const History = () => {
  type Payment = {
    name: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    date: string;
  };

  const payments: Payment[] = [
    {
      name: "Amazon Purchase",
      amount: 2499.99,
      status: "success",
      date: "2025-08-20T14:32:00Z",
    },
    {
      name: "Flipkart Order",
      amount: 1299.5,
      status: "pending",
      date: "2025-08-25T10:15:00Z",
    },
    {
      name: "Zomato Food Delivery",
      amount: 399.0,
      status: "processing",
      date: "2025-08-26T19:45:00Z",
    },
    {
      name: "Netflix Subscription",
      amount: 699.0,
      status: "failed",
      date: "2025-08-18T06:00:00Z",
    },
    {
      name: "Swiggy Order",
      amount: 249.0,
      status: "success",
      date: "2025-08-27T12:20:00Z",
    },
    {
      name: "PhonePe Recharge",
      amount: 149.0,
      status: "pending",
      date: "2025-08-28T09:30:00Z",
    },
  ];

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        return (
          <div className="bg-[#02B15A26] px-2 py-1 rounded-[8px] text-[#02B15A]">
            {row.getValue("status")}
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-[666px] border border-primary-500 rounded-[20px] p-4">
      <div className="text-primary-100 font-bold text-[28px]">Transaction</div>
      <HistoryTable className="p-4" columns={columns} data={payments} />
    </div>
  );
};

export default History;
