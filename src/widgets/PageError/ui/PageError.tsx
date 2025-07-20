import { Button } from "antd";
import cls from "./PageError.module.scss"

export const PageError = () => {
    const refreshPage = () => {
        location.reload();
    }
    return (
        <div className={cls.PageError}>
            <p>{"Неожиданная Ошибка"}</p>
            <Button onClick={refreshPage}>
                Обновить
            </Button>
        </div>
    );
};
