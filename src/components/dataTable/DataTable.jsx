import { DataGrid } from "@mui/x-data-grid";
import "./DataTable.scss";
import { userRows, userColumns } from "./utils";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div id="viewButton">View</div>
            <div id="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
