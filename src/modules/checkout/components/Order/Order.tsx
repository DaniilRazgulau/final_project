import { useEffect } from "react"
import cartStore from "../../../../common/stores/CartStore"
import { useNavigate } from "react-router-dom"
import { observer } from "mobx-react-lite"
import {Form, Input } from "antd"
import './Order.css'


type FieldsType = {
    username: string
    email: string
}


export const Order = observer(() => {
    const navigate = useNavigate()
    const {isCartEmpty, totalPrice} = cartStore
    
    useEffect(() => {
        if(isCartEmpty){
            navigate("/cart")
        }
    }, [isCartEmpty])

    const handelOrderFinish = (values: FieldsType) => {
        console.log(values)
        navigate('/checkout/result',{
            state: {
                userData: values
            }
        })
    }

    return <>
        {!isCartEmpty && <div>
            <h2 className="sum">Сумма заказа: {totalPrice}$</h2>
            <Form
                onFinish={(values: FieldsType) => handelOrderFinish(values)}
            >
                <Form.Item
                    label="Имя"
                    name="username"
                    rules={[{ required: true, message: 'Введите Ваше Имя!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Введите Ваш E-mail!',
                        },
                      ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Телефон"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Введите Ваш телефон!', 
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Промокод"
                    name="promocode"
                    rules={[
                        {
                            required: false,
                            message: 'Введите ваш промокод!',
                        }
                    ]}>
                    <Input />
                </Form.Item>          
                <Form.Item>
                    <button className="placing_order">
                        Оформить заказ
                    </button>
                </Form.Item>
            </Form>
        </div>}
    </>
})
