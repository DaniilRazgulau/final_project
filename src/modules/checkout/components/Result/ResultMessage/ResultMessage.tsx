import { Button, Result } from 'antd';
import { userDataType } from '../Result';
import cartStore from '../../../../../common/stores/CartStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type ResultMessageProps = {
    data: userDataType
}

export const ResultMessage = ({data}:ResultMessageProps) => {
    const navigate = useNavigate()
    const {clear} = cartStore
    const {username, email} = data
    
    useEffect(() => {
        clear()
    }, [])

    const goToCatalog = () => {
        navigate("/")
    }

    return <Result
                status="success"
                title={`Заказ на имя: ${username} c email: ${email} успешно оформлен`}
                extra={[
                <Button key="buy" onClick={goToCatalog}>Вернуться в каталог</Button>,
                ]}
            />
}