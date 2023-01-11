import React from 'react';
import { Select } from 'antd';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const App: React.FC = () => (
  <Select
    showSearch
    placeholder="请选择民族"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: '汉族',
        label: '汉族',
      },
      {
        value: '回族',
        label: '回族',
      },
      {
        value: '蒙古族',
        label: '蒙古族',
      },
    ]}
  />
);

export default App;
