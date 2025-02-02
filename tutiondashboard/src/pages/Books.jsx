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
import { AddorUpdateBook, GetBooksData, DeleteBook } from "../services/Api";
import ActionsBtns from "../components/ActionsBtns";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FormColumn, FormRow } from "../components/layoutComponent";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";

export default function Books() {
  const [Books, setBooks] = useState(null);
  const [bookVisible, setBookVisible] = useState(false);
  const [filters, setFilters] = useState({
    studentName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    status: { value: null, matchMode: FilterMatchMode.EQUALS }, // Add status filter
  });
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(true);

  const method = useForm({
    defaultValues: {
      bookName: "",
      bokkDesc: "",
      bookImgUrl: "",
      bookUrl: "",
    },
  });
  const { data: BookData, refetch } = useQuery({
    queryKey: ["booksdata"],
    queryFn: GetBooksData,
  });
  useEffect(() => {
    if (BookData) {
      console.log(BookData.data);
      setBooks(BookData.data);
      setLoading(false);
    }
  }, [BookData]); // eslint-disable-line react-hooks/exhaustive-deps

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
  const AddorUpdateMutation = useMutation({
    mutationFn: AddorUpdateBook,
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        refetch();

        setBookVisible(false);
        method.reset();
      }
    },
  });
  const DeleteBookMutation = useMutation({
    mutationFn: DeleteBook,
    onSuccess: (data) => {
      // console.log(data)
      if (data) {
        refetch();
        // setBookVisible(false)
        // method.reset()
      }
    },
  });
  const AcceptRequest = async (id) => {
    // acceptMutation.mutate(id);
  };
  const RejectRequest = async (id) => {
    // rejectMutation.mutate(id);
  };
  const Deletebook = async (id) => {
    DeleteBookMutation.mutate(id);
  };
  const onsubmit = (data) => {
    console.log(data);
    AddorUpdateMutation.mutate(data);
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
        // onEdit={() => EditRequest(rowData.id)}
        onDelete={() => Deletebook(rowData.BookID)}
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
        value={Books}
        paginator
        rows={10}
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        loading={loading}
        emptyMessage="No Books found."
      >
        <Column
          body={snoBodyTemplate}
          header="S No."
          style={{ minWidth: "6rem" }}
        />
        <Column
          field="BookName"
          header="Book Name"
          filter
          filterPlaceholder="Search by book name"
          style={{ minWidth: "12rem" }}
        />
        <Column
          field="BookDesc"
          header="description"
          style={{ minWidth: "12rem" }}
        />

        <Column field="ImgUrl" header="Image URL" />
        <Column field="BookUrl" header="Book URL" />
        <Column body={ActionTemplate} header="Action" />
      </DataTable>
      <Dialog
        header="Book"
        visible={bookVisible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!bookVisible) return;
          setBookVisible(false);
          method.reset();
        }}
      >
        <form onSubmit={method.handleSubmit(onsubmit)}>
          <FormRow>
            <FormColumn>
              <CustomTextInput
                control={method.control}
                name={"bookName"}
                label="Book Name"
                className="w-full"
                required={true}
                validateOnChange={true} // Enable validation on change
                RegexCode={/^[A-Za-z\s]*$/}
              />
            </FormColumn>
            <FormColumn>
              <CustomTextInput
                control={method.control}
                name={"bookDesc"}
                label="Book Description"
                className="w-full"
                required={true}
              />
            </FormColumn>
            <FormColumn>
              <CustomTextInput
                control={method.control}
                name="bookImgUrl"
                label="Book Image Url"
                className="w-full"
                required={true}
                validateOnChange={true} // Enable validation on change
                RegexCode="^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$" // Pass regex as a string
              />
            </FormColumn>
            <FormColumn>
              <CustomTextInput
                control={method.control}
                name={"bookUrl"}
                label="Book Url"
                className="w-full"
                required={true}
                validateOnChange={true} // Enable validation on change
                RegexCode="^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$"
              />
            </FormColumn>
            <FormColumn>
              <Button label="Add" type="submit" />
            </FormColumn>
          </FormRow>
        </form>
      </Dialog>
    </div>
  );
}
