import React, { useEffect, useState } from 'react';
import { Row, Col, Form, FormGroup, Button, Label, Input } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCardV2 from '../../components/ComponentCardV2';
import message from '../../components/Message';
import api from '../../constants/api';
import ComponentCard from '../../components/ComponentCard';
import creationdatetime from '../../constants/creationdatetime';

const ContentUpdate = () => {
  // All state variables
  const [contentDetails, setContentDetails] = useState();

  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();

  //Setting data in contentDetails
  const handleInputs = (e) => {
    setContentDetails({ ...contentDetails, [e.target.name]: e.target.value });
  };
  //setting data in Description Modal contentDetails


  // Get content data By content id
  const getContentById = () => {
    api
      .post('/contact/getContactsById', { contact_id: id })
      .then((res) => {
        setContentDetails(res.data.data[0]);
      })
      .catch(() => {
        message('Content Data Not Found', 'info');
      });
  };
  //Edit Content
  const editContentData = () => {
    contentDetails.modification_date = creationdatetime;
    console.log(contentDetails);
    if (
      contentDetails.content_title !== '' &&
      contentDetails.sub_category_id !== '' &&
      contentDetails.published !== ''
    ) {
      api
        .post('/contact/editContact', contentDetails)
        .then(() => {
          message('Record edited successfully', 'success');
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };

  // getting data from Category
 

  useEffect(() => {
    getContentById();
  }, [id]);

  return (
    <>
      <BreadCrumbs heading={contentDetails && contentDetails.title} />
      <Form>
        <FormGroup>
          <ComponentCardV2>
            <Row>
              <Col>
                <Button
                  color="primary"
                  onClick={() => {
                    editContentData();
                    setTimeout(() => {
                      navigate('/Customer');
                    }, 1100);
                  }}
                >
                  Save
                </Button>
              </Col>
              <Col>
                <Button
                  color="primary"
                  onClick={() => {
                    editContentData();
                  }}
                >
                  Apply
                </Button>
              </Col>
              <Col>
                <Button
                  color="dark"
                  onClick={() => {
                    navigate('/Customer');
                    console.log('back to list');
                  }}
                >
                  Back to List
                </Button>
              </Col>
            </Row>
          </ComponentCardV2>
          {/* Content Details Form */}
          <ComponentCard title="Customer details" creationModificationDate={contentDetails}>
            <ToastContainer></ToastContainer>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label> Contact Id </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.contact_id}
                    name="contact_id"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                <Label>Name</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.first_name}
                    name="first_name"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  {/* Category title from Category table */}
                  <Label>Mobile</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.mobile}
                    name="mobile"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  {/* Category title from Category table */}
                  <Label>Location</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.address}
                    name="address"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  {/* Category title from Category table */}
                  <Label>Native</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.address1}
                    name="address1"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  {/* Category title from Category table */}
                  <Label>Year of birth</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.birth_year}
                    name="birth_year"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  {/* Category title from Category table */}
                  <Label>Present Profession/Job</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.position}
                    name="position"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  {/* Category title from Category table */}
                  <Label>Since in UAE</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.from_year}
                    name="from_year"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Willing to volunteer</Label>
                  <br></br>
                  <Label>Yes</Label>
                  <Input
                    name="published"
                    value="1"
                    type="radio"
                    defaultChecked={contentDetails && contentDetails.published === 1 && true}
                    onChange={handleInputs}
                  />
                  <Label>No</Label>
                  <Input
                    name="published"
                    value="0"
                    type="radio"
                    defaultChecked={contentDetails && contentDetails.published === 0 && true}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
             
            </Row>
          </ComponentCard>
          </FormGroup>
      </Form>
     
     
    </>
  );
};
export default ContentUpdate;
