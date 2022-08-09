import * as React from "react";
import "./brand.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { itemData } from "../../Data/datatablesource";
import { Link } from "react-router-dom";

export default function Brand() {
  return (
    <div className="brandContainer">
      <div className="brandTitle">
        All brands
        <Link to="/brands/new" className="link">
          Add New Brand
        </Link>
      </div>
      <ImageList sx={{ width: 780, height: 500 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div" className="imageList">
            brand collection
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              style={{ width: "100%" }}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <Link to="/products/new" style={{ textDecoration: "none" }}>
                  <Button
                    style={{ color: "#fff" }}
                    startIcon={<AddCircleIcon />}
                  >
                    add product
                  </Button>
                </Link>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
