import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd'
import { ScanOutlined } from '@ant-design/icons'

const LoginForm = () => {
  const [form] = Form.useForm()
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = (values) => {
    setLoading(true)
    // 模拟登录请求
    setTimeout(() => {
      setLoading(false)
      if (values.username === 'admin' && values.password === 'password') {
        message.success('登录成功')
      } else {
        message.error('用户名或密码错误')
      }
    }, 1000)
  }

  const handleRegister = () => {
    message.info('暂未实现注册功能')
  }

  const handleForgetPassword = () => {
    message.info('暂未实现找回密码功能')
  }

  const handleScanQRCode = () => {
    message.info('暂未实现微信扫码登录功能')
  }

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <Form
          form={form}
          onFinish={handleLogin}
          initialValues={{ remember: rememberMe }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            >
              记住我
            </Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            登录
          </Button>{' '}
          <Form.Item></Form.Item>
        </Form>
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <a onClick={handleForgetPassword}>忘记密码</a> |{' '}
          <a onClick={handleRegister}>注册账号</a>
        </div>
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <Button onClick={handleScanQRCode} icon={<ScanOutlined />}>
            微信扫码登录
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default LoginForm
