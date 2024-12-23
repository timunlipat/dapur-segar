"use client";

import { X } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const CartModal = ({
                       isOpen,
                       onClose,
                       cartItems = [],
                       updateQuantity,
                       removeItem,
                       subtotal,
                       shipping,
                       total
                   }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-hidden flex flex-col">
                <DialogHeader className="px-2">
                    <div className="flex justify-between items-center">
                        <DialogTitle>Troli Belanja ({cartItems?.length || 0})</DialogTitle>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-500"
                            type="button"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <DialogDescription className="sr-only">
                        Senarai item dalam troli belanja anda
                    </DialogDescription>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto px-2 py-4">
                    {!cartItems || cartItems.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            Troli anda kosong
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={`cart-item-${item.id}`}
                                    item={item}
                                    updateQuantity={updateQuantity}
                                    removeItem={removeItem}
                                    isCompact={true}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {cartItems && cartItems.length > 0 && (
                    <div className="border-t pt-4 px-2">
                        <CartSummary
                            subtotal={subtotal}
                            shipping={shipping}
                            total={total}
                            isCompact={true}
                        />
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default CartModal;