import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button,Form,Radio,Input,Tabs,Upload,Icon,message,Select } from 'antd';


function UnlockByMnemonic({form}) {
  return (
    <div className="">
     <Form layout="horizontal" className="">
       <Form.Item className="mb15" label="Select Your Wallet Type">
         {form.getFieldDecorator('wallet', {
           initialValue:'1',
           rules:[]
         })(
          <Select
            showSearch
            placeholder="Search/Select"
            optionFilterProp="children"
            size="large"
          >
            {[1,1,1,1].map((item,index)=>
              <Select.Option key={index} value={'v1.0'} >Metamask</Select.Option>
            )}
          </Select>
         )}
       </Form.Item>
       <Form.Item className="mb15" label="Paste Your Mnemonic Here">
         {form.getFieldDecorator('mnemonic', {
           initialValue:'1',
           rules:[]
         })(
          <Input.TextArea size="large" autosize={{minRows:3,maxRows:6}} />
         )}
       </Form.Item>
       <Form.Item className="mb25" label="password">
         {form.getFieldDecorator('password', {
           initialValue:'',
           rules:[]
         })(
         	<Input size="large" type="password" />
         )}
       </Form.Item>
       <Form.Item className="">
         <Button type="primary" className="d-block w-100" size="large">UnLock</Button>
       </Form.Item>
     </Form> 
    </div>
  )
}

export default Form.create()(UnlockByMnemonic)
