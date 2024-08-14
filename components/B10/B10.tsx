import BaseCart from './BaseCart';
import BaseButton from './BaseButton';

export default function B10() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <BaseCart
                content="Áo phông nam mát mẻ"
                title="Áo phông nam"
                image="https://bizweb.dktcdn.net/100/393/859/products/361edd2d-42e5-47f6-a8c9-b5db62d91bef.jpg?v=1648718879750"
            >
                <BaseButton type="primary">Thêm vào giỏ hàng</BaseButton>
            </BaseCart>
        </div>
    );
}
