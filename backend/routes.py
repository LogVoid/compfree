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
        return jsonify(message="Products fetched successfully.", products=prodl), 201
    except Exception as e:
        return jsonify(message=f"Failed to fetch products: {e}"), 404

