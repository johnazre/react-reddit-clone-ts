import React from 'react'
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap'

import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa'
import { IPost } from '../store/posts/types'

const Post = (props: IPost) => {
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              Post Title | <FaArrowUp /> 1 <FaArrowDown />
            </CardTitle>
            <CardSubtitle>Post Author</CardSubtitle>
            <CardText>Post Body</CardText>
            <hr />
            a few seconds ago | <FaComment /> 2 Comments
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input
                  type="text"
                  name="comment"
                  id="comment-field"
                  placeholder="Enter a comment here"
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            <ul className="mt-2">
              <li>Comment One</li>
              <li>Comment Two</li>
            </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Post
