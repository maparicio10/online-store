import { XCircleIcon } from '@heroicons/react/24/outline'
import './style.css'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { getImageUrl } from '../../utils';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    console.log(context.productShow)

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-2'>Detail</h2>
                <div onClick={() => context.closeProductDetail()}><XCircleIcon className="size-6 text-black" /></div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={getImageUrl(context.productShow.images)} alt="" />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productShow.price}</span>
                <span className='font-medium text-md'>{context.productShow.title}</span>
                <span className='font-light text-sm'>{context.productShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail
