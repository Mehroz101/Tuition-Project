import React, { useState, useEffect } from "react";
import { classNames } from "primereact/utils";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { Tag } from "primereact/tag";
import { useQuery } from "@tanstack/react-query";
import { GetInvitationData } from "../services/Api";

export default function Invitation() {
  const [customers, setCustomers] = useState(null);
  const [filters, setFilters] = useState({
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [loading, setLoading] = useState(true);
  const { data: Invitationdata } = useQuery({
    queryKey: ["Invitationdata"],
    queryFn: GetInvitationData,
  });
  useEffect(() => {
    if (Invitationdata) {
      console.log(Invitationdata);
      setCustomers(Invitationdata);
      setLoading(false);
    }
  }, [Invitationdata]); // eslint-disable-line react-hooks/exhaustive-deps

  const snoBodyTemplate = (rowData, options) => {
    return options.rowIndex + 1; // Row index starts from 0, so add 1 for 1-based numbering
  };
  //   "pending", "accepted", "rejected", "closed"
  const StatusTemplate = (rowData) => {
    if (rowData.status === "pending") {
      return <Tag value="Pending" severity="warning" />;
    } else if (rowData.status === "accepted") {
      return <Tag value="Accepted" severity="success" />;
    } else if (rowData.status === "rejected") {
      return <Tag value="Rejected" severity="danger" />;
    } else if (rowData.status === "closed") {
      return <Tag value="Closed" severity="info" />;
    }
    return null;
  };
  return (
    <div className="card">
      <div className="page_top">
        <h2>Invitation</h2>
      </div>
      <DataTable
        value={customers}
        paginator
        rows={10}
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        loading={loading}
        emptyMessage="No customers found."
      >
        <Column
          body={snoBodyTemplate}
          header="S No."
          style={{ minWidth: "6rem" }}
        />
        <Column
          field="studentName"
          header="Student Name"
          filter
          filterPlaceholder="Search by name"
          style={{ minWidth: "12rem" }}
        />
        <Column
          field="teacherName"
          header="Teacher Name"
          style={{ minWidth: "12rem" }}
        />
        <Column
          field="offeredPrice"
          header="Offered Price"
          style={{ minWidth: "12rem" }}
        />
        <Column
          field="subject"
          header="Subject"
          style={{ minWidth: "12rem" }}
        />
        <Column field="rating" header="Rating" style={{ minWidth: "12rem" }} />
        <Column field="review" header="Review" style={{ minWidth: "12rem" }} />
        <Column
          field="status"
          body={StatusTemplate}
          header="Status"
          style={{ minWidth: "12rem" }}
        />
      </DataTable>
    </div>
  );
}
