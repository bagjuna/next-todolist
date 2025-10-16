'use client'
import Image from "next/image"

export default function CartItem({cartItem}) {


    return(
        <li key={cartItem.cno} className="border-2 p-1 m-1">
            <div>CNO: {cartItem.cno}</div>
            <div>PNO: {cartItem.pno}</div>
            <div>PNAME: {cartItem.pname}</div>
            <div>PRICE: {cartItem.price}</div>
            <div>QTY: {cartItem.quantity}</div>
            <div>
                <Image
                    src={`http://localhost:8080/s_${cartItem.fileName}`}
                    alt={cartItem.pname}
                    width={100} // Add the width here
                    height={100} // Add the height here
                    priority
                />
            </div>
        </li>
    )
}
