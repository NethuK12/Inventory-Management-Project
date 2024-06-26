import React from 'react';
import { useParams } from 'react-router-dom';
import TeaSet01 from '../images/tea set 01.jpg';
import TeaSet02 from '../images/tea set 02.jpg';
import TeaSet03 from '../images/tea set 03.jpg';
import TeaSet04 from '../images/tea set 04.jpg';
import TeaSet05 from '../images/tea set 05.jpg';


const SubProducts = () => {
    const {id} = useParams();
    console.log(id);

    const products = [
        {
          id: 1,
          name: 'Tea Set 01',
          href: '#',
          imageSrc: TeaSet01,
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
        },
        {
          id: 1,
          name: 'Tea Set 02',
          href: '#',
          imageSrc: TeaSet02,
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
        },
        {
          id: 1,
          name: 'Tea Set 03',
          href: '#',
          imageSrc: TeaSet03,
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
        },
        {
          id: 1,
          name: 'Tea Set 04',
          href: '#',
          imageSrc: TeaSet04,
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
        },
        {
          id: 1,
          name: 'Tea Set 05',
          href: '#',
          imageSrc: TeaSet05,
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
        },

      ]

  return (
    <div>  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

    </div>
  )
}

export default SubProducts
