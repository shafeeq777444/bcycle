import React, { useState } from 'react';
import { Button, Modal, Form, Input, Row, Col } from 'antd';

const PaymentModal = ({cartItems, procees}) => {
    console.log(cartItems)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        
        console.log('Delivery Details:', values);
        procees({address:values})
        setIsModalOpen(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log('Validation Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <>
      <Button 
        type="primary" 
        className='w-full bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-0 h-14 text-lg tracking-wide' 
        onClick={showModal}
      >
        <span className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Proceed to Checkout
        </span>
      </Button>
      <Modal
        title={
          <div className="text-xl font-semibold text-black border-b border-gray-300 pb-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              Delivery Address
            </div>
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        width={600}
        className="[&_.ant-modal-content]:rounded-2xl [&_.ant-modal-content]:overflow-hidden [&_.ant-modal-content]:shadow-2xl [&_.ant-modal-header]:border-b-0 [&_.ant-modal-header]:pt-6 [&_.ant-modal-header]:px-6 [&_.ant-modal-header]:pb-0 [&_.ant-modal-footer]:border-t [&_.ant-modal-footer]:border-gray-300 [&_.ant-modal-footer]:pt-4 [&_.ant-modal-footer]:px-6 [&_.ant-modal-footer]:pb-6 [&_.ant-modal-footer]:bg-gray-100 [&_.ant-form-item-label>label]:h-auto [&_.ant-input:focus]:shadow-gray-200 [&_.ant-input:focus]:shadow-[0_0_0_2px_rgba(0,0,0,0.1)] [&_.ant-input-focused]:shadow-gray-200 [&_.ant-input-focused]:shadow-[0_0_0_2px_rgba(0,0,0,0.1)] [&_.ant-form-item-explain-error]:text-xs [&_.ant-form-item-explain-error]:mt-1"
        okButtonProps={{
          className: 'bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black border-0 h-10 px-8 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200'
        }}
        cancelButtonProps={{
          className: 'h-10 px-8 font-medium rounded-lg border-gray-400 text-gray-700 hover:border-black hover:text-black transition-all duration-200'
        }}
        style={{
          top: 20,
        }}
        bodyStyle={{
          padding: '24px 24px 16px 24px',
          backgroundColor: '#ffffff'
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="delivery_form"
          className="space-y-1"
        >
          <Form.Item
            name="fullAddress"
            label={
              <span className="text-sm font-medium text-black flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 1h8v6H8V1z" />
                </svg>
                Full Address
              </span>
            }
            rules={[{ required: true, message: 'Please enter your address' }]}
            className="mb-6"
          >
            <Input.TextArea
              rows={3}
              placeholder="House No, Street Name, Landmark..."
              className="rounded-lg border-gray-400 focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-200 resize-none text-sm leading-relaxed"
            />
          </Form.Item>

          <Row gutter={20} className="mb-4">
            <Col span={12}>
              <Form.Item
                name="city"
                label={
                  <span className="text-sm font-medium text-black flex items-center gap-2">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
                    </svg>
                    City
                  </span>
                }
                rules={[{ required: true, message: 'Please enter your city' }]}
              >
                <Input 
                  placeholder="City name" 
                  className="rounded-lg border-gray-400 focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-200 h-10"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="state"
                label={
                  <span className="text-sm font-medium text-black flex items-center gap-2">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    State
                  </span>
                }
                rules={[{ required: true, message: 'Please enter your state' }]}
              >
                <Input 
                  placeholder="State name" 
                  className="rounded-lg border-gray-400 focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-200 h-10"
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="pincode"
            label={
              <span className="text-sm font-medium text-black flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                Pincode
              </span>
            }
            rules={[
              { required: true, message: 'Please enter your pincode' },
              { pattern: /^[0-9]{5,6}$/, message: 'Invalid pincode format' },
            ]}
            className="mb-2"
          >
            <Input 
              placeholder="Eg: 560001" 
              className="rounded-lg border-gray-400 focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-200 h-10"
              maxLength={6}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PaymentModal;