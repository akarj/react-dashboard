import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DataTable.scss";
import { userColumns } from "./utils";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase";

const DataTable = () => {
  const [data, setData] = useState([]);

  function handleDelete(key) {
    setData(data.filter(row => row.id !== key));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, "users"));
        const list = [];
        querySnapshot.forEach(doc => {
          list.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setData(list);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: params => {
        return (
          <div className="cellAction">
            <Link to="/users/12" className="links">
              <div id="viewButton">View</div>
            </Link>
            <div id="deleteButton" onClick={() => handleDelete(params.row.id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" className="links">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
