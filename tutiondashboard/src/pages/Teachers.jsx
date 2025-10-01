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
import { GetTeacherData } from "../services/Api";

export default function Teachers() {
  const [customers, setCustomers] = useState(null);
  const [filters, setFilters] = useState({
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [loading, setLoading] = useState(true);
  const { data: Teacherdata } = useQuery({
    queryKey: ["Teacherdata"],
    queryFn: GetTeacherData,
  });
  useEffect(() => {
    if (Teacherdata) {
      setCustomers(Teacherdata);
      setLoading(false);
    }
  }, [Teacherdata]); // eslint-disable-line react-hooks/exhaustive-deps

  const snoBodyTemplate = (rowData, options) => {
    return options.rowIndex + 1; // Row index starts from 0, so add 1 for 1-based numbering
  };
  return (
    <div className="card">
      <div className="page_top">
        <h2>Teachers</h2>
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
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by name"
          style={{ minWidth: "12rem" }}
        />
        <Column field="city" header="City" style={{ minWidth: "12rem" }} />
        <Column field="fee" header="Fee" style={{ minWidth: "12rem" }} />
        <Column field="number" header="Number" style={{ minWidth: "12rem" }} />
        <Column field="rating" header="Rating" style={{ minWidth: "12rem" }} />
      </DataTable>
    </div>
  );
}
