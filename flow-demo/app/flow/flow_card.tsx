import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Flex, Input, AutoComplete, Card } from 'antd';
import { SetStateAction, useState } from 'react';
import { Typography } from 'antd';
// import './flow.module.css';

const { Title, Text } = Typography;

const options = [
  { value: 'String' },
  { value: 'Numeric' },
  { value: 'Boolean' },
];
// const list = [
//   { id: 1, name: 'restaurant', type: 'String' },
//   { id: 2, name: 'address', type: 'String' },
//   { id: 3, name: 'phone_number', type: 'Numeric' },
//   { id: 4, name: 'location', type: 'Boolean' },
//   { id: 5, name: 'timing', type: 'Numeric' },
// ];

export default function FlowCard({ title, selected, list }) {
  console.log('props', selected, title, list);

  const [listArray, setlistArray] = useState(list);
  const [obj, setObj] = useState({});
  const [isVisible, setIsVisible] = useState<boolean>(false);

  //   const [title, setTitle] = useState('mergent');
  //   const [isPopupOpen, setisPopupOpen] = useState(false);

  // data edit add
  const [selectedRow, setSelectedRow] = useState(0);

  const onEditTitle = () => {
    console.log('edit title');
    // setTitle('Testing title');
  };
  const onEditList = (val: object): void => {
    setObj(val);
    // setisPopupOpen(true);
    setSelectedRow(val.id);
    console.log('list change', obj, 'is tru,', obj.id);
  };
  const onAddList = () => {
    const obj = {
      id: listArray.length + 1,
      name: '',
      type: '',
    };
    //   list.push(obj);
    setlistArray([...list, obj]);
    setSelectedRow(listArray.length + 1);
    console.log('on add list', listArray);
  };
  const onSaveList = (val: {}) => {
    console.log('save details', val);
    setSelectedRow(0);
  };
  const onSelectedValue = (e: any) => {
    const getNum = selectedRow - 1;
    const newObj = [
      {
        ...listArray[getNum],
        type: e,
      },
    ];
    const newArray = listArray.map(
      (obj) => newObj.find((o) => o.id === obj.id) || obj
    );
    setlistArray(newArray);
    console.log('change event', e, selectedRow, listArray);
  };
  // chang name
  const onChangeName = (e: any) => {
    const getNum = selectedRow - 1;
    const newObj = [
      {
        ...listArray[getNum],
        name: e.target.value,
      },
    ];
    const newArray = listArray.map(
      (obj) => newObj.find((o) => o.id === obj.id) || obj
    );
    setlistArray(newArray);
    console.log('change event', e, selectedRow, listArray);
  };

  const onChangeMini = (e: any) => {
    e.preventDefault();
    setIsVisible(true);
    console.log('is minimize', isVisible);
  };
  const handleClick = (event: any) => {
    console.log(event.detail);
    switch (event.detail) {
      case 2: {
        console.log('double click');
        setIsVisible(!isVisible);
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <>
      {isVisible ? (
        <Card
          onClick={handleClick}
          style={{ width: 150 }}
          bodyStyle={{ padding: '10px', overflow: 'hidden' }}
        >
          <Flex vertical justify='center' align='center'>
            <Title style={{ margin: 0 }} level={5}>
              {title}
            </Title>
            <Text type='secondary'>{listArray.length} Fields</Text>
          </Flex>
        </Card>
      ) : (
        <div
          onClick={handleClick}
          className={selected ? 'mergent__block selected' : 'mergent__block'}
        >
          <ul>
            <li className='header'>
              <ul>
                <li>
                  {title}
                  <Button onClick={onEditTitle} type='text'>
                    <EditOutlined />
                  </Button>
                </li>
                <li>
                  <Button onClick={onChangeMini} type='text'>
                    Draft
                  </Button>
                </li>
              </ul>
            </li>

            <li className='list'>
              {listArray.map((val) => {
                if (val.id === selectedRow || val.name === '') {
                  return (
                    <ul key={val.id}>
                      <li>
                        <Input
                          autoFocus
                          defaultValue={val.name}
                          bordered={false}
                          onChange={onChangeName}
                        />
                      </li>
                      <li>
                        <AutoComplete
                          style={{ width: 80 }}
                          popupMatchSelectWidth={100}
                          options={options}
                          value={val.type}
                          bordered={false}
                          onChange={onSelectedValue}
                        />
                      </li>
                      <li>
                        <Button onClick={() => onSaveList(val)} type='text'>
                          <SaveOutlined />
                        </Button>
                      </li>
                    </ul>
                  );
                } else {
                  return (
                    <ul key={val.id}>
                      <li>{val.name}</li>
                      <li>{val.type}</li>
                      <li>
                        <Button onClick={() => onEditList(val)} type='text'>
                          <EditOutlined />
                        </Button>
                      </li>
                    </ul>
                  );
                }
              })}
            </li>
            <li className='add-field'>
              <Button onClick={onAddList} type='text'>
                <ul>
                  <li>+ Add Field</li>
                  <li>Version</li>
                </ul>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
