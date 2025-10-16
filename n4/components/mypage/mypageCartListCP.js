
'use client'

import { useAuthCheck } from "@/hooks/useAuthCheck"
import Image from "next/image"
import { useEffect, useState } from "react"
import CartItem from "@/components/mypage/item/cartItem";


export default function MyPageCartListCP() {

    const {session} = useAuthCheck(true)

    useEffect(() => {

        if(session?.user?.email) {
            fetch("/api/cart/list", {method: 'GET'})
                .then(res => {
                    res.json()
                        .then(serverItems => {
                            console.log(serverItems)
                            setCartItems(() => serverItems)

                        })
                })
        }
    },[session])


    return (
        <div>
            <div>
                <div>Cart Items {cartItems.length}</div>
                <ul>

                    {cartItems.map(cartItem =>
                        <CartItem cartItem={cartItem} key={cartItem.cno}></CartItem>
                    )}
                </ul>
            </div>
        </div>

    )
}

