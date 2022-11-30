import React, {FC, useState} from 'react';
import {Divider, Layout, Steps} from "antd";
import Header from "../component/Header";
import Menu from "../component/Menu";
import {Outlet} from "react-router-dom";
import './Module.css'
const Main:FC = () => {
    const [current, setCurrent] = useState(0);

    const onChange = (value: number) => {
        console.log('onChange:', current);
        setCurrent(value);
    };
    const description = 'This is a description.';
    return (

        <Layout>
            <Header/>
            <Layout>
                <Menu/>

            </Layout>
            <div className='step'>
                <Steps
                    current={current}
                    onChange={onChange}
                    items={[
                        {
                            title: 'информация о  лице ',
                        },
                        {
                            title: 'Сведения о доходах',
                        },
                        {
                            title: 'Сведения о расходах',
                        },
                        {
                            title: 'Сведения об имуществе',
                        },
                        {
                            title: 'Сведения о счетах',
                        },

                    ]}
                />

                <Divider />
            </div>

            <div className='module__container'>
                <Outlet/>
            </div>

        </Layout>

    );
};

export default Main;
