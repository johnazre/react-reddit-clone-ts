import React, { Component, useState } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

interface APFState {
  title: string
  body: string
  author: string
  img_url: string
}

const AddPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    author: '',
    img_url: ''
  })
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('formData', formData)
  }
  return (
    <Row>
      <Col sm="10">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="title-field">Title</Label>
            <Input
              type="text"
              name="title"
              id="title-field"
              onChange={e =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="body-field">Body</Label>
            <Input
              type="text"
              name="body"
              id="body-field"
              onChange={e => setFormData({ ...formData, body: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="author-field">Author</Label>
            <Input
              type="text"
              name="author"
              id="author-field"
              onChange={e =>
                setFormData({ ...formData, author: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="image-field">Image URL</Label>
            <Input
              type="text"
              name="img_url"
              id="image-field"
              onChange={e =>
                setFormData({ ...formData, img_url: e.target.value })
              }
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Col>
    </Row>
  )
}

export default AddPostForm
