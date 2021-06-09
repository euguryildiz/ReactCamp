import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Container, Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import cartDetail from "../pages/cartDetail";

export default function Dashboard() {
  return (
    <div>

      <Container className="main">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}> <Categories /> </Grid.Column>
            <Grid.Column width={12}> 
            <Route exact path="/" component={ProductList} /> 
            <Route exact path="/products" component={ProductList} /> 
            <Route exact path="/products/:id" component={ProductDetail} /> 
            <Route exact path="/cart" component={cartDetail} /> 

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
     
      
    </div>
  );
}
