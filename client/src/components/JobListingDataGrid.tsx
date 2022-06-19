import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { IJobListing } from "../interfaces/IJobListing";
import LinearProgress from "@mui/material/LinearProgress";

interface Props {
  jobListings: IJobListing[];
  loading: boolean;
}

const cols = [
  {
    field: "company",
    headerName: "Company",
    width: 150,
    editable: false,
  },
  {
    field: "role",
    headerName: "Role",
    width: 100,
    editable: false,
  },
  {
    field: "level",
    headerName: "Level",
    width: 100,
    editable: false,
  },
  {
    field: "posted_at",
    headerName: "Posted At",
    width: 100,
    editable: false,
  },
  {
    field: "contract",
    headerName: "Contract",
    width: 100,
    editable: false,
  },
  {
    field: "location",
    headerName: "Location",
    width: 100,
    editable: false,
  },
  {
    field: "languages",
    headerName: "Languages",
    width: 150,
    editable: false,
  },
  {
    field: "tools",
    headerName: "Tools",
    width: 150,
    editable: false,
  },
  {
    field: "new",
    headerName: "New",
    width: 50,
    editable: false,
    valueGetter: (params: any) => `${params.row.new ? "New" : ""}`,
  },
  {
    field: "featured",
    headerName: "Featured",
    width: 100,
    editable: false,
    valueGetter: (params: any) => `${params.row.featured ? "Featured" : ""}`,
  },
];

const JobListingDataGrid = (props: Props) => {
  const [pageSize, setPageSize] = React.useState<number>(10);
  let jobListings = props.jobListings;

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        density="compact"
        rows={jobListings}
        columns={cols}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        disableSelectionOnClick
        components={{
          LoadingOverlay: LinearProgress,
        }}
        loading={props.loading}
      />
    </Box>
  );
};

export default JobListingDataGrid;
