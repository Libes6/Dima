import React, { FC, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Checkbox, DatePicker, DatePickerProps, Form, Input, Radio, Select} from 'antd';
const { Option } = Select;
import type { RadioChangeEvent } from 'antd';
const { RangePicker } = DatePicker;
const OneModule:FC = () => {
    const errorMesage ='Заполните поле'
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        localStorage.setItem('moduleOne',values)
    };
    const [value, setValue] = useState(1);
    const onChangeRadio = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div>
            <h2>Информация о лице, предоставляющем сведения</h2>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="place"
                    rules={[{ required: true, message: errorMesage }]}
                >
                    <Select
                        placeholder="Куда  подаеться справка"

                        allowClear
                    >
                        <Option value="1">Управление президента РФ по противодействию коррупции</Option>
                        <Option value="2">правление Президента РФ по вопросам государтсвенной службы и кадров</Option>
                        <Option value="3">Департамент кадров Правительства РФ</Option>

                    </Select>
                </Form.Item>

                <Form.Item
                    name="Reason"
                    rules={[{ required: true, message: errorMesage }]}
                >
                    <Select
                        placeholder="в связи с чем подается справка"

                        allowClear
                    >
                        <Option value="1">В рамках декларационной кампании</Option>
                        <Option value="2">В рамках рассмотрениея кандидата на должность</Option>
                        <Option value="3">Иное</Option>

                    </Select>
                </Form.Item>
<h3>Личные данные лица, представляющего сведения:</h3>

                <Form.Item
                    name="lastName"
                    rules={[{ required: true, message: errorMesage }]}
                >
                    <Input  placeholder="Фамилия" />
                    </Form.Item>
                <Form.Item
                    name="middleName"
                    rules={[{ required: true, message:errorMesage }]}
                >
                    <Input  placeholder="Имя" />
                </Form.Item>
                <Form.Item
                    name="firstName"
                    rules={[{ required: true, message: errorMesage }]}
                >
                    <Input  placeholder="Отчество" />
                </Form.Item>
<h3>Пол</h3>

                <Form.Item
                    name="sex"
                    rules={[{ required: true, message: errorMesage }]}
                >
                    <Radio.Group onChange={onChangeRadio} value={value}>
                        <Radio value={1}>Муж</Radio>
                        <Radio value={2}>Жен</Radio>

                    </Radio.Group>
                </Form.Item>


                <h3>Дата рождения</h3>
                <Form.Item
                    name="DateB"
                    rules={[{ required: true, message: errorMesage }]}
                >
                    <DatePicker onChange={onChangeDate} />
                </Form.Item>


                <Form.Item
                    name="snils"
                    rules={[{ required: true, message:errorMesage}]}
                >
                    <Input maxLength={11} placeholder="СНИЛС" />
                </Form.Item>

                <h3>Паспортные данные</h3>
                <div className="serianumPAS">
                    <Form.Item
                        name="seriaPAS"
                        rules={[{ required: true, message: errorMesage }]}
                    >
                        <Input maxLength={4} placeholder="Серия" />
                    </Form.Item>
                    <Form.Item
                        name="numberPAS"
                        rules={[{ required: true, message: errorMesage }]}
                    >
                        <Input maxLength={6} placeholder="номер" />
                    </Form.Item>
                </div>
                <Form.Item
                    name="vidan"
                    rules={[{ required: true, message: errorMesage }]}
                >
                    <Input  placeholder="Кем выдан" />
                </Form.Item>

                <h5>Дата выдачи</h5>
                <Form.Item
                    name="DateV"
                    rules={[{ required: true, message: errorMesage }]}
                >
                    <DatePicker onChange={onChangeDate} />
                </Form.Item>
               <div className="datePeriod">
                   <h3>Переуд для справки</h3>
                   <Form.Item
                       name="DateV"
                       rules={[{ required: true, message: errorMesage }]}
                   >

                       <RangePicker />
                   </Form.Item>

               </div>

                <Form.Item
                    name="DateV"
                    rules={[{ required: true, message: errorMesage }]}
                >

                  <Button type="primary" htmlType="submit">Далее</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default OneModule;
