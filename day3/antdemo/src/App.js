import './App.css';
import { Menu, Select, Row, Col, Radio } from 'antd';
import 'antd/dist/antd.css';
import logo from './assest/logo.svg';
import { useState } from 'react';
function App() {
  const [currentNav, setCurrentNav] = useState('设计');
  const { Option } = Select
  return (
    <div className="App">
      <div className='nav'>
        <Row align='middle'>
          <Col>
            <a className='logoRef'><img src={logo} />Ant Design</a>
          </Col>
          <Col>
            <Menu mode='horizontal' >

              <Menu.Item>
                设计
              </Menu.Item>

              <Menu.Item>
                文档
              </Menu.Item>

              <Menu.Item>
                组件
              </Menu.Item>

              <Menu.Item>
                资源
              </Menu.Item>

              <Menu.Item>
                国内镜像
              </Menu.Item>
            </Menu>
          </Col>

          <Col offset={0.5}>
            <div>
              <Select defaultValue='4.17.0-alpha.3'>
                <Option value='versionDefault'>4.17.0-alpha.3</Option>
                <Option value='version1'>3.x</Option>
                <Option value='version2'>2.x</Option>
                <Option value='version3'>1.x</Option>
                <Option value='version4'>0.12.x</Option>
              </Select>
            </div>
          </Col>
          <Col offset={1}>
            <Radio.Group >
              <Radio.Button value="english">english</Radio.Button>
            </Radio.Group>
          </Col>
          <Col offset={1}>
            <Radio.Group >
              <Radio.Button value="RTL">RTL</Radio.Button>
            </Radio.Group>
          </Col>
          <Col offset={1}>
            <Select defaultValue='更多'>
              <Option value='Ant Design Pro'>Ant Design Pro</Option>
              <Option value='version1'>Ant Design Charts</Option>
              <Option value='version2'>Ant Design Pro Components</Option>
            </Select>
          </Col>
        </Row>
      </div>

    </div>
  );
}

export default App;
