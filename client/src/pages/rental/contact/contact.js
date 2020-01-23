import React , {useState ,useEffect}from 'react'
import { Form, Icon, Input, Button, notification } from 'antd';
import axios from 'axios'
import './contact.css'


const { TextArea } = Input;

const ContactForm = ({form}) => {
  const [sendScucces, setSendScucces] = useState(false)
  const [loading, setLoading] = useState(false)


  const { getFieldDecorator } = form;

  const openNotification = () => {
    if (sendScucces) {
      notification.open({
        message:
          'Send with succes',
      });
    }
    setTimeout( setSendScucces(false) , 3000);
  };
useEffect(() => {
  openNotification()
}, [sendScucces])

 const handleSubmit = e => {
  setLoading (true)
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      const {name,email ,message} = values
      axios.post('./api/contact',{name,email ,message}).then(res=>{
        setSendScucces(true)
        setLoading (false)
      } )
      .catch(e=>{
        setLoading(false)
        console.log('error')
      } )

    });
  };
  
      return (
        <Form onSubmit={handleSubmit} className="contact-form">
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                placeholder="name"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true  }],
            })(
              <Input
                type = 'email'
                placeholder="email"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('message', {
              rules: [{ required: true }],
            })(
              <TextArea
                placeholder="Message"
              />,
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" loading = {loading}>
              Send
            </Button>
        </Form>
      )
}


const WrappedContactForm = Form.create({ name: 'contact_form' })(ContactForm);

export default WrappedContactForm
