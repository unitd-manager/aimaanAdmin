import React,{useState} from 'react';
import { Card, CardBody, CardTitle,Row,Col,Form,FormGroup,Label,Input,Button,Modal,ModalHeader,ModalBody, ModalFooter, } from 'reactstrap';
import PropTypes from 'prop-types'
import api from '../../constants/api';


const EditCostingSummaryModal = ({editCostingSummaryModel,setEditCostingSummaryModel,costingsummary}) => {

    EditCostingSummaryModal.propTypes = {
        editCostingSummaryModel: PropTypes.bool,
        setEditCostingSummaryModel: PropTypes.func,
        costingsummary: PropTypes.object,
      }

    const [insertaudiodetails, setInsertAudioDetails] = useState(null);

    //edit Tab Costing Summary Form

    const handleInputs = (e) => {
        setInsertAudioDetails({...insertaudiodetails, [e.target.name]:e.target.value});
      }
  
      const insertAudioData = () => {

        api.post('/tender/insertAudioData',insertaudiodetails)
        .then((res)=> {
            console.log(res)
            setEditCostingSummaryModel(false);
            window.location.reload()
       })
     }

     React.useEffect(() => {
        setInsertAudioDetails(costingsummary)
       }, [costingsummary])

  return (
    <>
        <Modal size="lg" isOpen={editCostingSummaryModel}>
            <ModalHeader>Insert Audio Datas
            <Button color="secondary" className='shadow-none' onClick={()=>{setEditCostingSummaryModel(false)}}>
                X
              </Button>
            </ModalHeader>

            <ModalBody>
              <Row>
              <Col md="12">
                <Card>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>Tag</Label>
                            <Input type="text" 
                            onChange={handleInputs} 
                            defaultValue={insertaudiodetails && insertaudiodetails.tag} 
                            name="tag"/>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Author Name</Label>
                            <Input type="text" 
                            onChange={handleInputs} 
                            defaultValue={insertaudiodetails && insertaudiodetails.author_name} 
                            name="author_name"/>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Published Date</Label>
                            <Input type="date" 
                            onChange={handleInputs} 
                            defaultValue={insertaudiodetails && insertaudiodetails.published_date} 
                            name="published_date"/>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Date</Label>
                            <Input type="date" 
                            onChange={handleInputs} 
                            defaultValue={insertaudiodetails && insertaudiodetails.date} 
                            name="date" />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Description</Label>
                            <Input type="textarea" 
                            disabled onChange={handleInputs} 
                            defaultValue={insertaudiodetails && insertaudiodetails.description} 
                            name="description" />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>

                  <CardBody className="bg-light">
                    <CardTitle tag="h4" className="mb-0"></CardTitle>
                  </CardBody>

                  <CardBody>
                    <Row>

                    <Col md="4">
                      <FormGroup>
                          <Label>Total Material</Label>
                          <Input type="number" 
                            disabled onChange={handleInputs} defaultValue={costingsummary && costingsummary.total_material_price} 
                            name="total_material_price"/>
                      </FormGroup>
                      </Col>

                      <Col md="4">
                      <FormGroup>
                          <Label>Transport Charges </Label>
                          <Input type="number" 
                            onChange={handleInputs} defaultValue={costingsummary && costingsummary.transport_charges} 
                            name="transport_charges"/>
                      </FormGroup>
                      </Col>

                      <Col md="4">
                      <FormGroup>
                          <Label>Total Labour Charges</Label>
                          <Input type="number" 
                            disabled onChange={handleInputs} defaultValue={costingsummary && costingsummary.total_labour_charges} 
                            name="total_labour_charges"/>
                      </FormGroup>
                      </Col>

                    </Row>

                    <Row>

                      <Col md="4">
                      <FormGroup>
                          <Label>Salesman Commission </Label>
                          <Input type="number" 
                          onChange={handleInputs} defaultValue={costingsummary && costingsummary.salesman_commission} 
                          name="salesman_commission"/>
                      </FormGroup>
                      </Col>

                      <Col md="4">
                      <FormGroup>
                          <Label>Finance Charges </Label>
                          <Input type="number" 
                          onChange={handleInputs} defaultValue={costingsummary && costingsummary.finance_charges} 
                          name="finance_charges"/>
                      </FormGroup>
                      </Col>

                      <Col md="4">
                      <FormGroup>
                          <Label>Office Overheads </Label>
                          <Input type="number" 
                          onChange={handleInputs} defaultValue={costingsummary && costingsummary.office_overheads} 
                          name="office_overheads" />
                      </FormGroup>
                      </Col>

                    </Row>

                    <Row>

                      <Col md="4">
                      <FormGroup>
                          <Label>Other Charges </Label>
                          <Input type="number" 
                          onChange={handleInputs} defaultValue={costingsummary && costingsummary.other_charges} 
                          name="other_charges"/>
                      </FormGroup>
                      </Col>

                      <Col md="4">
                      <FormGroup>
                          <Label>TOTAL COST</Label>
                          <Input type="number" 
                          disabled onChange={handleInputs} value={costingsummary && costingsummary.total_cost} 
                          name="total_cost"/>
                      </FormGroup>
                      </Col>

                    </Row>
                  </CardBody>
                  <CardBody>
                  <CardTitle className="mb-0 bg-light">
                  
                    </CardTitle>
                
                  </CardBody>
                </Card>
              </Col>
              </Row>  
            </ModalBody>
            <ModalFooter>
              <Button color="primary" className='shadow-none' onClick={()=>{ insertAudioData(); } } > Submit </Button>
              <Button color="secondary" className='shadow-none' onClick={()=>{setEditCostingSummaryModel(false)}}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal> 
    </>
  )
}

export default EditCostingSummaryModal