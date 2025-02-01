import Image from "next/image";
import React from "react";

interface CardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    href: string;
    name: string;
    color: string;
    price: number;
}

const Card: React.FC<CardProps> = ({ id, imageUrl, imageAlt, href, name, color, price }) => {
    return (
        <div key={id} className="group relative">
            <img
                alt={imageAlt}
                src={imageUrl}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{price}</p>
            </div>
        </div>
    );
};

export default Card;
