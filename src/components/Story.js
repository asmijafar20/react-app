import React from 'react';
import { Card, CardTitle, CardText, CardBody, button } from 'reactstrap';
import './Story.styles.css';

const Story = (props) => { 
    const {item} = props;
    
    return (
        <div className="card-container">

            <Card>
                <CardBody>
                <button type="button">Fav</button>


                <CardTitle>ID: {item.id}</CardTitle>
                <CardText> Headline: {item.story.headline}</CardText>

                </CardBody>
            </Card> 
       
    </div>
            );

}

export default Story;

