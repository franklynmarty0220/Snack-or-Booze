import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function MenuItem({ menuItems, notFound }) {
    const {id} = useParams();

    let menuItem = menuItems.find(item => item.id === id);
    if (!menuItem) return <Redirect to={notFound} />;

    return(
        <section>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {menuItem.name}
                    </CardTitle>
                    <CardText className="font-italic">
                        {menuItem.description}
                    </CardText>
                    <p>
                        <b>Recipe:</b> {menuItem.recipe}
                    </p>
                    <p>
                    <b>Serve:</b> {menuItem.serve}
                    </p>
                </CardBody>
            </Card>
        </section>
    )
}

export default MenuItem;
