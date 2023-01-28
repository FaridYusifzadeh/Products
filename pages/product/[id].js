import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { Get } from "../../services/fetchServices";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Productdetails() {
  const router = useRouter();

  const [expanded, setExpanded] = useState(false);
  const [detailProduct, setDetailProduct] = useState({});
  const [images, setImages] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    Get(`/products/${router.query.id}`).then((response) => {
      setDetailProduct(response);
      setImages(response.images);
    });
  }, []);

  const { brand, category, description, rating, stock, title } = detailProduct;

  return (
    <div className="container">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <CardMedia
                component="img"
                height={"100%"}
                image={images[0]}
                alt="Paella dish"
              />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={brand}
          subheader={category}
        />

        <CardMedia
          component="img"
          height="480"
          image={images[0]}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            {rating}
          </IconButton>
          <IconButton aria-label="share">
            <Inventory2Icon />
            {stock}
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{brand} :</Typography>

            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
