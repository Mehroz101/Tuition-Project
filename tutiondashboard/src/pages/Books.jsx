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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  acceptRequest,
  closeRequest,
  GetInvitationData,
  rejectRequest,
} from "../services/Api";
import ActionsBtns from "../components/ActionsBtns";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FormColumn, FormRow } from "../components/layoutComponent";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";

export default function Books() {
  const [customers, setCustomers] = useState(null);
  const [bookVisible, setBookVisible] = useState(false);
  const [filters, setFilters] = useState({
    studentName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    status: { value: null, matchMode: FilterMatchMode.EQUALS }, // Add status filter
  });
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(true);
  const { data: Invitationdata } = useQuery({
    queryKey: ["Invitationdata"],
    queryFn: GetInvitationData,
  });
  const method = useForm()
  // const [statuses] = useState(["Pending", "Confirmed", "Closed", "Rejected"]);
  // const getSeverity = (status) => {
  //   switch (status) {
  //     case "Pending":
  //       return "info";

  //     case "Confirmed":
  //       return "success";

  //     case "Rejected":
  //       return "danger";

  //     case "Closed":
  //       return "warning";
  //   }
  // };
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
  // const StatusTemplate = (rowData) => {
  //   if (rowData.status === "pending") {
  //     return <Tag value="Pending" severity="info" />;
  //   } else if (rowData.status === "accepted") {
  //     return <Tag value="Accepted" severity="success" />;
  //   } else if (rowData.status === "rejected") {
  //     return <Tag value="Rejected" severity="danger" />;
  //   } else if (rowData.status === "closed") {
  //     return <Tag value="Closed" severity="warning" />;
  //   }
  //   return null;
  // };

  // const acceptMutation = useMutation({
  //   mutationFn: acceptRequest,
  //   onSuccess: (data) => {
  //     queryClient.invalidateQueries(["teacherInvitations"]);
  //     refetchInvitations();
  //   },
  // });
  // const rejectMutation = useMutation({
  //   mutationFn: rejectRequest,
  //   onSuccess: (data) => {
  //     queryClient.invalidateQueries(["teacherInvitations"]);
  //     refetchInvitations();
  //   },
  // });
  // const closeMutation = useMutation({
  //   mutationFn: closeRequest,
  //   onSuccess: (data) => {
  //     queryClient.invalidateQueries(["teacherInvitations"]);
  //     refetchInvitations();
  //   },
  // });
  const AcceptRequest = async (id) => {
    // acceptMutation.mutate(id);
  };
  const RejectRequest = async (id) => {
    // rejectMutation.mutate(id);
  };
  const CloseRequest = async (id) => {
    // closeMutation.mutate(id);
  };
  const statusItemTemplate = (option) => {
    return <Tag value={option} severity={getSeverity(option)} />;
  };

  const ActionTemplate = (rowData) => {
    return (
      <ActionsBtns
        rowData={rowData}
        // onAccept={() => AcceptRequest(rowData.id)}
        // onReject={() => RejectRequest(rowData.id)}
        onEdit={() => EditRequest(rowData.id)}
        onDelete={() => DeleteRequest(rowData.id)}
      />
    );
  };
  return (
    <div className="card">
      <div className="page_top flex justify-content-between align-items-center">
        <h2>Books</h2>
        <Button
          label="Add Book"
          color="primary"
          onClick={() => setBookVisible(true)}
        ></Button>
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
          field="bookName"
          header="Book Name"
          filter
          filterPlaceholder="Search by book name"
          style={{ minWidth: "12rem" }}
        />
        <Column
          field="Description"
          header="description"
          style={{ minWidth: "12rem" }}
        />

        <Column field="link" header="Link" />
        <Column body={ActionTemplate} header="Action" />
      </DataTable>
      <Dialog
        header="Book"
        visible={bookVisible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!bookVisible) return;
          setBookVisible(false);
        }}
      >
       <FormRow>
        <FormColumn>
          {/* <CustomTextInput

          /> */}
        </FormColumn>
       </FormRow>
      </Dialog>
    </div>
  );
}
