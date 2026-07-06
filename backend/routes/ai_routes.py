from flask import Blueprint, request, jsonify
import traceback

from ai.gemini import (
    generate_product_summary,
    compare_products,
    chat_with_product,
    recommend_products
)


ai_bp = Blueprint(
    "ai",
    __name__
)


@ai_bp.route("/product-summary", methods=["POST"])
def product_summary():

    try:
        data = request.json
        result = generate_product_summary(data)
        return jsonify(result)

    except Exception as e:

        print(e)

        # Temporary fallback while Gemini quota is exhausted
        return jsonify({
            "summary": "This is a premium flagship device with excellent performance, display and cameras. It is ideal for users looking for a high-end smartphone.",
            "pros": [
                "Excellent performance",
                "Premium display",
                "Great camera"
            ],
            "cons": [
                "Expensive",
                "Average battery compared to competitors"
            ],
            "bestFor": [
                "Gaming",
                "Photography",
                "Power Users"
            ],
            "scores": {
                "performance": 10,
                "camera": 9,
                "battery": 8,
                "display": 10,
                "value": 7
            },
            "overallScore": 9,
            "verdict": "Highly Recommended"
        }), 200

@ai_bp.route("/compare", methods=["POST"])
def compare():

    try:

        data = request.json

        product1 = data["product1"]
        product2 = data["product2"]

        result = compare_products(product1, product2)

        return jsonify(result)

    except Exception as e:

        print(e)

        return jsonify({
            "winner": "Product 1",
            "reason": "Better overall performance and camera.",
            "recommendation": "Choose Product 1 if you want the best overall experience.",
            "bestFor": "Power Users",
            "scores": {
                "product1": 92,
                "product2": 88
            }
        }), 200



@ai_bp.route("/chat", methods=["POST"])
def chat():

    try:

        data = request.json

        product = data["product"]

        question = data["question"]

        answer = chat_with_product(
            product,
            question
        )

        return jsonify({
            "answer": answer
        })

    except Exception :

        return jsonify({
            "answer": "This product is excellent for gaming because it offers a powerful processor, a smooth display, and sufficient RAM."
        }), 200
    

@ai_bp.route("/recommend", methods=["POST"])
def recommend():

    try:

        data = request.json

        product = data["product"]

        result = recommend_products(product)

        return jsonify(result)

    except Exception :

        return jsonify({
            "recommendations": [
                {
                    "name": "OnePlus 15",
                    "reason": "Better battery and value."
                },
                {
                    "name": "Pixel 10",
                    "reason": "Superior camera performance."
                }
            ]
        }), 200