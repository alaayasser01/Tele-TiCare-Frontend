import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button , Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import { signupSchema } from '../schemas';


const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
export default function SignUp() {
  const {
      values,
      errors,
      touched,
      // isSubmitting,
      // handleBlur,
      handleChange,
      handleSubmit,
    } = useFormik({
      initialValues: {
        firstName:"",
        lastName:"",
        age: "",
        history:"",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signupSchema, onSubmit
    });
  console.log(values)
  
  console.log(errors)
  return (
    <Container className="d-flex flex-column align-items-center" style={{ paddingTop: '100px' }} >
    <h2 className='m-3'>Tele-TiCare/ SignUp</h2>
  <Form style={{  border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }} onSubmit={handleSubmit} autoComplete="off">
    <Row>
      <Col>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={values.firstName}
            onChange={handleChange}
            type="text"
            placeholder="Enter your first name"
            className={errors.firstName&& touched.email ? 'is-invalid' : ''}
          />
           {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={values.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Enter your last name"
            className={errors.lastName && touched.lastName ? 'is-invalid' : ''}
          />
          {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            value={values.age}
            onChange={handleChange}
            type="number"
            placeholder="Enter your age"
            className={errors.age && touched.age ? 'is-invalid' : ''}
          />
          {errors.age && touched.age && <p className="error">{errors.age}</p>}
        </Form.Group>
      </Col>
    </Row>
    
    <Row>
      <Col>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={values.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            className={errors.email && touched.email ? 'is-invalid' : ''}
          />
          {errors.email && touched.email && <p className="error">{errors.email}</p>}
        </Form.Group>
      </Col>
    </Row>

    <Row>
      <Col>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={values.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter your password"
            className={errors.password && touched.password ? 'is-invalid' : ''}
          />
          {errors.password && touched.password && <p className="error">{errors.password}</p>}
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={values.confirmPassword}
            onChange={handleChange}
            type="password"
            placeholder="Re-enter your password"
            className={errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}
          />
          {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </Form.Group>
      </Col>
    </Row>
    
    <Button className='m-3' style={{backgroundColor:'black'}} variant="primary" type="submit">
      Submit
    </Button>
    
  </Form>
</Container>

  )
}
