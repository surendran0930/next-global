import { HistoryTable } from "@/components/HistoryTable";
import TestingTable from "@/components/TestingTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

const History = () => {
  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  const payments: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    // ...
  ];
  // const columns: ColumnDef<Payment>[] = [
  //   {
  //     accessorKey: "status",
  //     header: "Status",
  //   },
  //   {
  //     accessorKey: "email",
  //     header: "Email",
  //   },
  //   {
  //     accessorKey: "amount",
  //     header: "Amount",
  //   },
  // ];
  const columns = [
    { key: "invoice", label: "Invoice", className: "w-[100px]" },
    { key: "status", label: "Status" },
    { key: "method", label: "Method" },
    { key: "amount", label: "Amount", className: "text-right" },
  ];

  const data = [
    {
      invoice: "INV001",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00",
    },
    { invoice: "INV002", status: "Pending", method: "UPI", amount: "$180.00" },
  ];
  // return <HistoryTable columns={columns} data={payments} />;
  return (
    <div>
      <TestingTable columns={columns} data={data} />
    </div>
  );
};

export default History;
