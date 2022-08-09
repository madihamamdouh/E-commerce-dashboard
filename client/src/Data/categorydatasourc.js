export const productColumns = [
    { field: "id", headerName: "ID", width: 150 },

    {field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="IMG" />
          {params.row.name}
        </div>
      );
    },
  },
    {
      field: "description",
      headerName: "Description",
      width: 700,
    },
  ];