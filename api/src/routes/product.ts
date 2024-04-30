import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import * as db from '../persistence/database';

const router = Router();

const productValidationRules = [
  body('productName').notEmpty().withMessage('productName is required'),
  body('pricePerKilogram').notEmpty().withMessage('pricePerKilogram is required'),

  body('pictures').notEmpty().withMessage('pictures is required'),

  body('colour').notEmpty().withMessage('colour is required'),
];

router.post('/', productValidationRules, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const product = await db.createProduct({
    productName: req.body.productName,
    pricePerKilogram: parseInt(req.body.pricePerKilogram),
    pictures: req.body.pictures,
    colour: req.body.colour
  });
  res.status(201).json(product);
});

router.get('/', async (req: Request, res: Response) => {
  const products = await db.getProducts();
  res.status(200).json(products);
});

router.get('/:uuid', async (req: Request, res: Response) => {
  const product = await db.getProductByUuid(req.params.uuid);
  if (!product) {
    res.status(404).send('Product not found');
  } else {
    res.status(200).json(product);
  }
});

router.put('/:uuid', productValidationRules, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const product = await db.updateProductByUuid(req.params.uuid, {
    productName: req.body.productName,
    pricePerKilogram: parseInt(req.body.pricePerKilogram),
    pictures: req.body.pictures,
    colour: req.body.colour
  });
  if (!product) {
    res.status(404).send('Product not found');
  } else {
    res.status(200).json(product);
  }
});

router.delete('/:uuid', async (req: Request, res: Response) => {
  await db.deleteProductByUuid(req.params.uuid);
  res.sendStatus(204);
});

export default router;
