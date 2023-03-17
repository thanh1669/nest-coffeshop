import * as Joi from 'joi';


export const OrderItem = Joi.object({
    item_id: Joi.number()
        .integer()
        .required(),
    item_sku: Joi.string()
        .max(50)
        .required(),
    item_name: Joi.string()
        .max(255)
        .required(),
    item_original_price: Joi.number()
        .integer()
        .required(),
    item_price: Joi.number()
        .integer()
        .required(),
    total_quantity: Joi.number()
        .integer()
        .required(),
    total_price: Joi.number()
        .integer()
        .required(),
});

export const OrderCreate = Joi.object({
    code: Joi.string()
        .max(50)
        .required(),
    status: Joi.number()
        .integer()
        .allow(null, ''),
    source: Joi.number()
        .integer()
        .required(),
    order_items: Joi.array()
        .items(OrderItem)
        .min(1)
        .required(),
    total_item: Joi.number()
        .integer()
        .required(),
    total_quantity: Joi.number()
        .integer()
        .required(),
    total_original_price: Joi.number()
        .integer()
        .required(),
    total_discount_price: Joi.number()
        .integer()
        .required(),
    total_vat_price: Joi.number()
        .integer()
        .required(),
    total_price: Joi.number()
        .integer()
        .required(),
    total_paid: Joi.number()
        .integer()
        .required()
});

export const ListOrder = Joi.object({
    skip: Joi.number()
        .integer()
        .allow(null, ''),
    limit: Joi.number()
        .integer()
        .allow(null, '')
})