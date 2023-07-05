"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  ColumnDef,
  PaginationState,
  createColumnHelper,
} from "@tanstack/react-table";
import { enqueueSnackbar } from "notistack";
import { DataTable, Button, Modal } from "ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getStudents, deleteStudent } from "../../data-access/service";
import ContentLoader from "@/components/ContentLoader";
import { Student } from "../../models/StudentModel";
import TableHeader from "@/modules/students/features/student-list/TableHeader";

const columnHelper = createColumnHelper<Student>();

const INITIAL_DELETE_MODAL_STATE: { id: null | number; show: boolean } = {
  id: null,
  show: false,
};

export default function StudentList() {
  const { push } = useRouter();
  const params = useSearchParams();
  const [deleteModalState, setDeleteModalState] = useState(
    INITIAL_DELETE_MODAL_STATE
  );
  const [globalFilter, setGlobalFilter] = useState("");
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const getStudentsQuery = useQuery({
    queryKey: ["students", globalFilter, pageSize * pageIndex, pageSize],
    queryFn: () => getStudents(globalFilter, pageSize * pageIndex, pageSize),
    keepPreviousData: true,
  });
  const deleteStudentMutation = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      enqueueSnackbar("User has been successfully removed.", {
        variant: "success",
      });
      onCloseDeleteModal();
      getStudentsQuery.refetch();
    },
  });

  useEffect(() => {
    const skip = params.get("skip");
    const limit = params.get("limit");
    const query = params.get("q");
    if (skip || limit)
      setPagination((prevState) => ({
        pageIndex: skip ? parseInt(skip) : prevState.pageIndex,
        pageSize: limit ? parseInt(limit) : prevState.pageSize,
      }));
    if (query) setGlobalFilter(query);
  }, [params]);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const onOpenDeleteModal = useCallback((id) => {
    setDeleteModalState({ id, show: true });
  }, []);

  function onCloseDeleteModal() {
    setDeleteModalState(INITIAL_DELETE_MODAL_STATE);
  }

  function onDeleteStudent() {
    deleteStudentMutation.mutate(deleteModalState.id);
  }

  const columns = useMemo<ColumnDef<any, any>[]>(
    () => [
      columnHelper.accessor("image", {
        header: "",
        cell: (info) => (
          <Image src={info.getValue()} width={65} height={55} alt="" />
        ),
      }),
      columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
        id: "fullName",
        header: "Name",
      }),
      columnHelper.accessor("email", {
        header: "Email",
      }),
      columnHelper.accessor("phone", {
        header: "Phone",
      }),
      columnHelper.accessor("domain", {
        header: "Website",
      }),
      columnHelper.accessor("company.name", {
        header: "Company Name",
      }),
      columnHelper.accessor("id", {
        header: "",
        cell: (info) => (
          <div className="flex">
            <Button
              variant="link"
              onClick={() => push(`/students/edit/${info.getValue()}`)}
            >
              <Image src="/media/icons/pen.svg" width={19} height={19} alt="" />
            </Button>
            <Button
              variant="link"
              onClick={() => onOpenDeleteModal(info.getValue())}
            >
              <Image
                src="/media/icons/trash.svg"
                width={16}
                height={18}
                alt=""
              />
            </Button>
          </div>
        ),
      }),
    ],
    [push, onOpenDeleteModal]
  );

  return (
    <>
      <Modal
        isOpen={deleteModalState.show}
        setIsOpen={onCloseDeleteModal}
        title={<div className="text-center">Delete Student</div>}
      >
        <div className="text-sm text-center pt-3">
          <div>Are you sure you want to delete?</div>
          <div>{`You can't undo this action.`}</div>
          <div className="mt-4">
            <Button
              variant="primary"
              className="mr-2"
              onClick={onDeleteStudent}
              disabled={deleteStudentMutation.isLoading}
            >
              Delete
            </Button>
            <Button
              variant="link"
              onClick={onCloseDeleteModal}
              disabled={deleteStudentMutation.isLoading}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
      <ContentLoader isLoading={getStudentsQuery.isLoading}>
        <TableHeader
          value={globalFilter}
          onChange={(value) => setGlobalFilter(value)}
          onClick={() => push("/students/new")}
        />
        <DataTable
          columns={columns}
          data={getStudentsQuery.data?.users || []}
          pageCount={getStudentsQuery.data?.total ?? -1}
          state={{
            pagination,
          }}
          onPaginationChange={setPagination}
          manualPagination
          debugTable
        />
      </ContentLoader>
    </>
  );
}
