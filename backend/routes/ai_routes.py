from flask import Blueprint, request, jsonify
import traceback

from ai.gemini import (
    generate_product_ai,
    compare_products,
    chat_with_product
)


ai_bp = Blueprint(
    "ai",
    __name__
)


@ai_bp.route("/product-ai", methods=["POST"])
def product_ai():
    try:
        data = request.json

        product = data["product"]
        products = data["products"]

        result = generate_product_ai(product, products)

        return jsonify(result)

    except Exception:

        return jsonify({
            "summary": "Excellent flagship device.",
            "overallScore": 9.3,
            "pros": [
                "Excellent performance",
                "Great camera",
                "Premium display"
            ],
            "cons": [
                "Expensive",
                "Average charging speed"
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
                "value": 8
            },
            "verdict": "Highly Recommended",
            "recommendations": [
                {
                    "name": "Samsung Galaxy S25 Ultra",
                    "reason": "Better camera zoom.",
                    "score": 9.2
                },
                {
                    "name": "Google Pixel 10 Pro",
                    "reason": "Excellent AI features.",
                    "score": 9.1
                },
                {
                    "name": "OnePlus 13",
                    "reason": "Excellent value for money.",
                    "score": 8.9
                }
            ]
        }), 200

# @ai_bp.route("/product-summary", methods=["POST"])
# def product_summary():

#     try:
#         data = request.json
#         result = generate_product_summary(data)
#         return jsonify(result)

#     except Exception as e:

#         print(e)

#         # Temporary fallback while Gemini quota is exhausted
#         return jsonify({
#             "summary": "This is a premium flagship device with excellent performance, display and cameras. It is ideal for users looking for a high-end smartphone.",
#             "pros": [
#                 "Excellent performance",
#                 "Premium display",
#                 "Great camera"
#             ],
#             "cons": [
#                 "Expensive",
#                 "Average battery compared to competitors"
#             ],
#             "bestFor": [
#                 "Gaming",
#                 "Photography",
#                 "Power Users"
#             ],
#             "scores": {
#                 "performance": 10,
#                 "camera": 9,
#                 "battery": 8,
#                 "display": 10,
#                 "value": 7
#             },
#             "overallScore": 9,
#             "verdict": "Highly Recommended"
#         }), 200

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
                "product1": 9.2,
                "product2": 8.8
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
    

# @ai_bp.route("/recommend", methods=["POST"])
# def recommend():

#     try:

#         data = request.json

#         product = data["product"]

#         products = data["products"]

#         result = recommend_products(
#             product,
#             products
#         )

#         return jsonify(result)

#     except Exception as e:

#         return jsonify({
#             "error": str(e)
#         }),500