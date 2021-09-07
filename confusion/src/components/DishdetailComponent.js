import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';


    /* lifecycle mount and update 
    componentDidMount() {
        console.log("Dishdetail componentDidMount invoked");
    }
    componentDidUpdate() {
        console.log("Dishdetail componentDidUpdate invoked");
    }*/
    function RenderDish({dish}) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

     function RenderComments({comments}) {
        if (comments == null || comments.length === 0) {
            return (
                <div></div>
            );
        }
        const renderedComments = comments.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: 'numeric'}).format(new Date(Date(comment.date)))}</p>
                    <p></p>
                </li>
            );
        });
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {renderedComments}
                </ul>
            </div>
        );
    }

    const DishDetail = (props) => {
        console.log("Dishdetail render invoked");
        if (props.dish != null) {
            return (
                <div class="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                           <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments}/>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }





export default DishDetail;