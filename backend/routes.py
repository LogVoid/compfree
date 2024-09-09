from flask import request, jsonify, send_from_directory
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

@app.route('/api/v1/products/<int:pid>/image', methods=['GET'])
def get_img(pid):
    try:
        product = Product.query.get(pid)
        if product is None:
            return jsonify(message="Product not found."), 404

        if product.img is None:
            return jsonify(message="This product is not associated with a image."), 404
        
        try:
            return send_from_directory(app.config['UPLOAD_FOLDER'], product.img, as_attachment=True)
        except Exception as e:
            return jsonify(message=f"Unexpected error: {e}"), 500
    except Exception as e:
        return jsonify(message=f"Failed to fetch product: {e}"), 500
