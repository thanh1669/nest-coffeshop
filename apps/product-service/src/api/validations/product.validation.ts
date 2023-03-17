import * as Joi from 'joi';

export const ListProduct = Joi.object({
    skip: Joi.number()
        .integer()
        .allow(null, ''),
    limit: Joi.number()
        .integer()
        .allow(null, ''),
    sku: Joi.string()
        .trim()
        .allow(null, '')
});

export const CreateProduct = Joi.object({
    sku: Joi.string()
        .trim()
        .max(50)
        .required(),
    name: Joi.string()
        .trim()
        .max(255)
        .required(),
    type: Joi.number()
        .integer()
        .required(),
    price: Joi.number()
        .integer()
        .required(),
    thumbnail_url: Joi.string()
        .max(255)
        .allow(null),
    category_id: Joi.number()
        .required()
});
