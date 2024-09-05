from flask import request, jsonify
from config import app, db
from models import Product

@app.route('/api/v1/products', methods=['GET'])
def get_products():
    try:
        prods = Product.query.all()
        prodl = []
        for prod in prods:
            prodl.append({
                "id": prod.id,
                "name": prod.name,
                "description": prod.description,
                "img": prod.img,
                "price": prod.price
            })
        return jsonify(message="Products fetched successfully.", products=prodl), 200
    except Exception as e:
        return jsonify(message=f"Failed to fetch products: {e}"), 404

@app.route('/api/v1/products/<int:pid>', methods=['GET'])
def get_product(pid):
    try:
        product = Product.query.get(pid)
        if product is None:
            return jsonify(message="Product not found."), 404

        return jsonify(
            message="Product fetched successfully.",
            product={
                "id": product.id,
                "name": product.name,
                "description": product.description,
                "img": product.img,
                "price": product.price
            }
        ), 200
    except Exception as e:
        return jsonify(message=f"Failed to fetch product: {e}"), 500

