export const productColumns = [
  { field: "_id", headerName: "ID", width: 150 },

  {
    field: "product",
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
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 500,
  },
];

//temporary data
export const productRows = [
  {
    id: 1,
    name: "Sofa",
    img: "https://cdn.sklum.com/ie/1062614/sofa-de-2-plazas-en-lino-y-tela-aktic.jpg",
    price: "450$",
    description: "Amazing",
  },
  {
    id: 2,
    name: "Chair",
    img: "https://www.thespruce.com/thmb/_c56b1Cq6Vu2CqHwM5Oqkh8J1Kk=/3000x2000/filters:fill(auto,1)/SPR-milliard-reading-chair-cosy-chair-faux-fur-saucer-white-jay-wilde-photo-01-a8c000ca69dc4ba688378c43b261893c.jpg",
    price: "600$",
    description: "Amazing",
  },
  {
    id: 3,
    name: "White Table",
    img: "https://ecofurnituredesign.com/wp-content/uploads/2022/05/Cooper-Compactum-SA-Pine-Chestnut-Finish-White-MDF-drawers-1-600x400.jpg.webp",
    price: "900$",
    description: "Amazing",
  },
  {
    id: 4,
    name: "Dining Table",
    img: "https://www.myfurnituremax.com/blog/wp-content/uploads/sites/84/2019/11/dining-room-design-1024x805.jpg",
    price: "1200$",
    description: "Amazing",
  },
  {
    id: 5,
    name: "Tv Table",
    img: "https://cdn11.bigcommerce.com/s-1u1m3wn/stencil/f0d917b0-a9ca-013a-dc54-429aee3ea0c9/e/bf082630-edd6-013a-8ddd-3a391bb1d9cd/img/custom_img/furniture_type_03.jpg",
    price: "700$",
    description: "Amazing",
  },
  {
    id: 6,
    name: "Wall Shelves",
    img: "https://andersen-furniture.com/media/3477/a_light_shelf_nyhed_forside.jpg?anchor=center&mode=crop&width=1120&heightratio=0.86&format=jpg&quality=80&slimmage=true&rnd=132736018390000000",
    price: "150$",
    description: "Amazing",
  },
  {
    id: 7,
    name: "Hanging Chair",
    img: "https://www.ulcdn.net/opt/www.ulcdn.net/images/taxon_images/taxon/1778/taxon_col_3/Outdoor-furniture.jpg",
    price: "1000$",
    description: "Amazing",
  },
  {
    id: 8,
    name: "Lamp Post",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoSAGls-AVrW-emaAwstO9tbRVCLSI_ot4cU13Zr0RyZmjMbq6NrNLMXWcEdhuhDErEs&usqp=CAU",
    price: "500$",
    description: "Amazing",
  },
  {
    id: 9,
    name: "Buffet",
    img: "https://image.shutterstock.com/image-photo/books-lamp-on-rustic-cupboard-260nw-786280387.jpg",
    price: "200$",
    description: "Amazing",
  },
  {
    id: 10,
    name: "Buffet",
    img: "https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497__480.jpg",
    price: "300$",
    description: "Amazing",
  },
];
